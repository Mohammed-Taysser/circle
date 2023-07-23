import { Button, Flex, Slider } from '@mantine/core';
import { ContextModalProps } from '@mantine/modals';
import { useCallback, useState } from 'react';
import Cropper from 'react-easy-crop';
import avatar from '../assets/images/default/avatar.png';

const DEFAULT_CONFIG = {
  aspect: 4 / 3,
  crop: { x: 0, y: 0 },
  image: avatar,
  zoom: 1,
  cropShape: 'rec',
  rotation: 0,
  title: 'title',
  // TODO: implement flip options on cropper modal
};

function CropperModal(props: ContextModalProps<CropModalInnerProps>) {
  const [croppedArea, setCroppedArea] = useState<CroppedArea | null>(null);
  const [config, setConfig] = useState({
    ...DEFAULT_CONFIG,
    ...props.innerProps,
  });

  const setCropperConfig = (key: string, value: any) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
  };

  const onCropComplete = useCallback(
    (croppedArea: CroppedArea, croppedAreaPixels: CroppedArea) => {
      setCroppedArea(croppedAreaPixels);
    },
    []
  );

  const onCropDone = async () => {
    if (croppedArea) {
      const canvas = await getCanvas(config, croppedArea);

      if (canvas) {
        convertCanvasToBlob(canvas, config.title).then((file) => {
          props.context.closeModal(props.id);
          config.onCropComplete(file, canvas.toDataURL('image/jpg'));
        });
      }
    }
  };

  return (
    <>
      <div className='h-80 relative'>
        <Cropper
          image={config.image}
          crop={config.crop}
          cropShape={config.cropShape}
          zoom={config.zoom}
          rotation={config.rotation}
          aspect={config.aspect}
          onCropChange={(point) => setCropperConfig('crop', point)}
          onZoomChange={(zoom) => setCropperConfig('zoom', zoom)}
          onCropComplete={onCropComplete}
        />
      </div>

      <Flex gap={10} className='my-10' align='center'>
        <span>Zoom</span>
        <Slider
          labelAlwaysOn
          className='flex-grow'
          value={config.zoom}
          step={0.1}
          min={1}
          max={5}
          onChange={(value) => setCropperConfig('zoom', value)}
        />
      </Flex>

      <Flex gap={10} className='my-10' align='center'>
        <span>Rotate</span>
        <Slider
          labelAlwaysOn
          className='flex-grow'
          value={config.rotation}
          step={0.1}
          min={1}
          max={360}
          onChange={(value) => setCropperConfig('rotation', value)}
          marks={[
            { value: 90, label: '90' },
            { value: 180, label: '180' },
            { value: 270, label: '270' },
            { value: 360, label: '360' },
          ]}
        />
      </Flex>

      <Flex gap={10} align='center'>
        <Button
          variant='default'
          onClick={() => props.context.closeModal(props.id)}
        >
          Cancel
        </Button>
        <Button onClick={onCropDone}>Confirm</Button>
      </Flex>
    </>
  );
}

function createImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.src = url;
  });
}

function getRadianAngle(degreeValue: number) {
  return (degreeValue * Math.PI) / 180;
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export function rotateSize(width: number, height: number, rotation: number) {
  const rotRad = getRadianAngle(rotation);

  return {
    width:
      Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
    height:
      Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
  };
}

async function getCanvas(
  config: CropModalInnerProps,
  croppedArea: CroppedArea
) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const image = await createImage(config.image);

  if (ctx) {
    const rotRad = getRadianAngle(config.rotation);

    // calculate bounding box of the rotated image
    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
      image.width,
      image.height,
      config.rotation
    );

    // set canvas size to match the bounding box
    canvas.width = bBoxWidth;
    canvas.height = bBoxHeight;

    // translate canvas context to a central location to allow rotating and flipping around the center
    ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
    ctx.rotate(rotRad);
    ctx.scale(
      config?.flip?.horizontal ? -1 : 1,
      config?.flip?.vertical ? -1 : 1
    );
    ctx.translate(-image.width / 2, -image.height / 2);

    // draw rotated image
    ctx.drawImage(image, 0, 0);

    const croppedCanvas = document.createElement('canvas');

    const croppedCtx = croppedCanvas.getContext('2d');

    if (croppedCtx) {
      // Set the size of the cropped canvas
      croppedCanvas.width = croppedArea.width;
      croppedCanvas.height = croppedArea.height;

      // Draw the cropped image onto the new canvas
      croppedCtx.drawImage(
        canvas,
        croppedArea.x,
        croppedArea.y,
        croppedArea.width,
        croppedArea.height,
        0,
        0,
        croppedArea.width,
        croppedArea.height
      );

      return croppedCanvas;
    }
  }
}

function convertCanvasToBlob(
  canvas: HTMLCanvasElement,
  title: string
): Promise<File> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        return reject('Empty Canvas');
      }

      const file = new File([blob], title, {
        type: 'image/jpg',
      });
      resolve(file);
    }, 'image/jpg');
  });
}

export default CropperModal;

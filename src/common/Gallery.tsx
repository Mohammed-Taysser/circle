import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgHash from 'lightgallery/plugins/hash';
import lgRotate from 'lightgallery/plugins/rotate';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgVideo from 'lightgallery/plugins/video';
import LightGallery from 'lightgallery/react';
import { uuidv4 } from '../helpers';

/**
 * Gallery component
 *
 * Displays a gallery of images or a single image. It uses the LightGallery library to provide a user-friendly interface for viewing the images.

 * @usage
 * - Use `galleryId` to provide an ID for the gallery.
 * - Use `gallery` to specify an array of image URLs.
 * - Use `full` to determine if the gallery should be displayed in full mode.
 */
function Gallery(props: PostGallery) {
  if (props.full) {
    return (
      <LightGallery
        elementClassNames='grid gap-4 grid-cols-2 xl:grid-cols-4'
        plugins={[lgThumbnail, lgVideo, lgFullscreen, lgRotate, lgHash]}
        galleryId={props.galleryId}
        mode='lg-soft-zoom'
        mobileSettings={{ controls: false, showCloseIcon: true }}
      >
        {props.gallery.length === 1 ? (
          <a href={props.gallery[0]} className='col-span-full'>
            <img
              src={props.gallery[0]}
              alt='gallery-photo'
              className='w-full h-52 md:h-[300px!important] rounded-lg object-cover'
            />
          </a>
        ) : (
          props.gallery.map((img, index) => (
            <a href={img} key={uuidv4()} className='col-span-1'>
              <img
                alt={`${props.galleryId}-gallery-${index + 1}`}
                src={img}
                className='max-w-full rounded'
              />
            </a>
          ))
        )}
      </LightGallery>
    );
  }

  if (props.gallery.length === 1) {
    return (
      <img
        src={props.gallery[0]}
        alt='gallery-photo'
        className='w-full h-52 md:h-[300px!important] rounded-lg object-cover'
      />
    );
  }

  return (
    <div className='grid gap-4 grid-cols-2 xl:grid-cols-4'>
      {props.gallery.map((img, index) => (
        <div key={uuidv4()} className='col-span-1'>
          <img
            alt={`${props.galleryId}-gallery-${index + 1}`}
            src={img}
            className='max-w-full rounded'
          />
        </div>
      ))}
    </div>
  );
}

Gallery.defaultProp = {
  galleryId: 'just-gallery-id',
  full: false,
  gallery: [],
};

export default Gallery;

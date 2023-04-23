import lgFullscreen from 'lightgallery/plugins/fullscreen';
import lgHash from 'lightgallery/plugins/hash';
import lgRotate from 'lightgallery/plugins/rotate';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgVideo from 'lightgallery/plugins/video';
import LightGallery from 'lightgallery/react';
import { uuidv4 } from '../helpers';

function Gallery(props: { galleryId: string; gallery: string[] }) {
  return (
    <LightGallery
      elementClassNames='grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'
      plugins={[lgThumbnail, lgVideo, lgFullscreen, lgRotate, lgHash]}
      galleryId={props.galleryId}
      mode='lg-soft-zoom'
    >
      {props.gallery.map((img, index) => (
        <a href={img} key={uuidv4()} className='col-span-1'>
          <img
            alt={`${props.galleryId}-gallery-${index + 1}`}
            src={img}
            className='max-w-full rounded'
          />
        </a>
      ))}
    </LightGallery>
  );
}

export default Gallery;

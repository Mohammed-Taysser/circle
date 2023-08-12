import { Image } from '@mantine/core';
import { Link } from 'react-router-dom';

function SinglePageCol(props: { page: SitemapItem }) {
  const { page } = props;

  return (
    <>
      <div className='preview-box'>
        <div className='top-dots'>
          <span className='dot'></span>
          <span className='dot'></span>
          <span className='dot'></span>
        </div>

        <div className='preview-image-wrapper'>
          <Link to={page.url}>
            <span className='text-over'>view demo</span>
            <Image
              withPlaceholder
              height={200}
              src={page.img}
              alt={page.label}
            />
          </Link>
        </div>

        <Link to={page.url} className='preview-label'>
          {page.label}
        </Link>
      </div>
    </>
  );
}

SinglePageCol.defaultProps = {
  label: '',
  Link: '/',
  img: '',
};

export default SinglePageCol;

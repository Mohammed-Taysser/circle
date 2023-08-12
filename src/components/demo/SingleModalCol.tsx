import { Image } from '@mantine/core';

function SingleModalCol(props: { modal: SitemapItem }) {
  const { modal } = props;

  return (
    <>
      <div className='preview-box'>
        <div className='preview-image-wrapper'>
          <Image
            withPlaceholder
            height={200}
            src={modal.img}
            alt={modal.label}
          />
        </div>

        <div className='preview-label'>{modal.label}</div>
      </div>
    </>
  );
}

SingleModalCol.defaultProps = {
  label: '',
  Link: '/',
  img: '',
};

export default SingleModalCol;

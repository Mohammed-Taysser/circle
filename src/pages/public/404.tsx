import { Anchor, Button } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { VscArrowSmallLeft } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import PageNotFoundImage from '../../assets/images/background/404.svg';

function PageNotFound() {
  useDocumentTitle('Circle | 404 page');

  return (
    <div className='text-center'>
      <div className='flex h-full content-center justify-center'>
        <div className='self-center'>
          <img src={PageNotFoundImage} alt='404 page' className='max-w-full' />
          <h2 className='text-lg my-5'>Oops… You just fousrc/pages/public/Groups.tsxnd an error page</h2>
          <h3 className='small text-muted'>
            We are sorry but the page you are looking for was not found, or you
            need to
            <Anchor component={Link} to='/login' className='mx-1'>
              Login
            </Anchor>
            to see it
          </h3>
          <Button component={Link} to='/' className=' mt-5'>
            <VscArrowSmallLeft className='text-2xl m-0' />
            Take me home
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;

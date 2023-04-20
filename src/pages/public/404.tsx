import { VscArrowSmallLeft } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import PageNotFoundImage from '../../assets/images/background/404.svg';
import { Button } from '@mantine/core';

function PageNotFound() {
  return (
    <div className='h-screen text-center'>
      <div className='flex h-full content-center justify-center'>
        <div className='self-center'>
          <img src={PageNotFoundImage} alt='404 page' className='max-w-full' />
          <h2 className='text-lg my-5'>Oops… You just found an error page</h2>
          <h3 className='small text-muted'>
            We are sorry but the page you are looking for was not found
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

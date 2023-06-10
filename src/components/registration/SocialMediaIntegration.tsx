import { Button, Group } from '@mantine/core';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';

function SocialMediaIntegration() {
  return (
    <>
      <Group grow mb='md' mt='md'>
        <Button radius='xl' variant='default'>
          <div className='flex items-center gap-2 justify-center'>
            <AiOutlineGoogle className='text-xl' />
            <span>Google</span>
          </div>
        </Button>
        <Button radius='xl' variant='default'>
          <div className='flex items-center gap-2 justify-center'>
            <FiTwitter className='text-xl' />
            <span>Twitter</span>
          </div>
        </Button>
      </Group>
    </>
  );
}

export default SocialMediaIntegration;

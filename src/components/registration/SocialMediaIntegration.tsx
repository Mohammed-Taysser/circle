import { Button, Group } from '@mantine/core';
import { AiOutlineGoogle } from 'react-icons/ai';
import { FiTwitter } from 'react-icons/fi';

function SocialMediaIntegration() {
  return (
    <>
      <Group grow mb='md' mt='md'>
        <Button
          leftIcon={<AiOutlineGoogle className='text-xl' />}
          radius='xl'
          variant='default'
        >
          Google
        </Button>
        <Button
          leftIcon={<FiTwitter className='text-xl' />}
          radius='xl'
          variant='default'
        >
          Twitter
        </Button>
      </Group>
    </>
  );
}

export default SocialMediaIntegration;

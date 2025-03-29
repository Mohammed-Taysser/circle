import { Container, Divider, Paper, Text } from '@mantine/core';
import { useToggle } from '@mantine/hooks';
import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import registration from '../../assets/images/background/registration.svg';
import Login from '../../components/registration/Login';
import Register from '../../components/registration/Register';
import SocialMediaIntegration from '../../components/registration/SocialMediaIntegration';
import useHelmet from '../../hooks/useHelmet';

function Registration() {
  useHelmet('joinUs');

  const [queryParams, setQueryParams] = useSearchParams();

  const [activeTap, toggleTap] = useToggle(['login', 'register']);

  useEffect(() => {
    if (queryParams.get('activeTap') === 'register') {
      toggleTap('register');
    } else if (queryParams.get('activeTap') === 'login') {
      toggleTap('login');
    }
  }, [queryParams.get('activeTap')]);

  const ViewComponent = useCallback(
    activeTap === 'register' ? Register : Login,
    [activeTap],
  );

  const toggleTapHandler = () => {
    queryParams.set(
      'activeTap',
      activeTap === 'register' ? 'login' : 'register',
    );
    setQueryParams(queryParams);
  };

  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 md:h-[100vh] items-center my-20 md:my-0 gap-10'>
        <div className='col-span-1 order-2 md:order-1'>
          <Paper radius='md' p='xl' withBorder className='relative'>
            <Text size='lg' weight={500}>
              {activeTap === 'register'
                ? 'Welcome to Circle, register with'
                : 'Welcome back, login with'}
            </Text>

            <SocialMediaIntegration />

            <Divider
              label='Or continue with email'
              labelPosition='center'
              my='lg'
            />

            <ViewComponent toggleTap={toggleTapHandler} />
          </Paper>
        </div>

        <div className='col-span-1 order-1 md:order-2'>
          <img src={registration} alt='registration' className='max-w-full' />
        </div>
      </div>
    </Container>
  );
}

export default Registration;

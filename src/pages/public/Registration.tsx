import {
  Container,
  Divider,
  LoadingOverlay,
  Paper,
  Text
} from '@mantine/core';
import { useDisclosure, useToggle } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Login from '../../components/registration/Login';
import Register from '../../components/registration/Register';
import SocialMediaIntegration from '../../components/registration/SocialMediaIntegration';

import registration from '../../assets/images/background/registration.svg';
import useHelmet from '../../hooks/useHelmet';

function Registration() {
  useHelmet('joinUs');
  const [isLoading, { toggle: toggleLoading }] = useDisclosure(false);

  let location = useLocation();
  let navigate = useNavigate();

  const [activeTap, toggleTap] = useToggle(['login', 'register']);

  const onFormSubmit = (data: any) => {
    console.log(data);

    toggleLoading();
    setTimeout(() => {
      toggleLoading();

      if (activeTap === 'register') {
        notifications.show({
          title: `Successfully register`,
          message:
            'Hey there, your account created successfully. please follow the instruction to complete your account',
          color: '',
          autoClose: true,
        });
      } else {
        notifications.show({
          title: `Successfully login`,
          message: 'Welcome back, Mohammed',
          loading: false,
          color: '',
          autoClose: true,
        });
      }

      const nextRoute = location.state?.next?.pathname || '/';

      localStorage.setItem('isLogin', JSON.stringify(true));

      navigate(nextRoute, { replace: true });
    }, 2000);
  };

  const ViewComponent = useCallback(
    activeTap === 'register' ? Register : Login,
    [activeTap]
  );

  return (
    <Container>
      <div className='grid grid-cols-1 md:grid-cols-2 md:h-[100vh] items-center my-20 md:my-0 gap-10'>
        <div className='col-span-1 order-2 md:order-1'>
          <Paper radius='md' p='xl' withBorder className='relative'>
            <LoadingOverlay visible={isLoading} overlayBlur={2} />

            <Text size='lg' weight={500}>
              {activeTap === 'register'
                ? 'Welcome to Mantine, register with'
                : 'Welcome back, login with'}
            </Text>

            <SocialMediaIntegration />

            <Divider
              label='Or continue with email'
              labelPosition='center'
              my='lg'
            />

            <ViewComponent toggleTap={toggleTap} onFormSubmit={onFormSubmit} />
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

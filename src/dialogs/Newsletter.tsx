import { Button, Dialog, Image, Input, Text, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import newsletterImage from '../assets/images/background/newsletter.svg';
import LocalStorage from '../core/localStorage';
import {
  createSelector,
  useAppDispatch,
  useAppSelector,
} from '../hooks/useRedux';
import subscriptionSlice from '../redux/features/subscription.slice';
import useStyles from '../styles/newsletter';

function Newsletter() {
  const { classes } = useStyles();
  const [isOpened, setIsOpened] = useState(false);

  const dispatch = useAppDispatch();
  const subscribeState = useAppSelector(
    createSelector((state) => state.subscribe),
  );

  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  useEffect(() => {
    checkSubscription();
  }, []);

  const checkSubscription = () => {
    const subscription = LocalStorage.get('subscription');
    if (!subscription) {
      setTimeout(() => {
        setIsOpened(true);
      }, 10000);
    }
  };

  const onFormSubmit = (values: { email: string }) => {
    dispatch(subscriptionSlice.actions.create({ email: values.email }))
      .unwrap()
      .then((response) => {
        notifications.show({
          title: 'Successfully subscribed',
          message: 'Check your inbox to confirm subscribe in newsletter!',
        });

        LocalStorage.set('subscription', response.data);

        setIsOpened(false);
      })
      .catch((error) => {
        notifications.show({
          title: 'Error',
          message: error,
          color: 'red',
        });
      });
  };

  return (
    <Dialog
      opened={isOpened}
      withCloseButton
      onClose={() => setIsOpened(false)}
      className='shadow-nice min-w-[50vw]'
      radius='md'
    >
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Title className={classes.title}>Wait a minute...</Title>
          <Text fw={500} fz='lg' mb={5}>
            Subscribe to our newsletter!
          </Text>
          <Text fz='sm' c='dimmed'>
            You will never miss important product updates, latest news and
            community QA sessions. Our newsletter is once a week, every Sunday.
          </Text>

          <form className={classes.body} onSubmit={form.onSubmit(onFormSubmit)}>
            <div className={classes.controls}>
              <Input
                type='email'
                name='email'
                placeholder='your@email.com'
                classNames={{ input: classes.input }}
                {...form.getInputProps('email')}
              />
              <Button
                className={classes.control}
                type='submit'
                loading={subscribeState.loading.create}
              >
                Subscribe
              </Button>
            </div>
          </form>
        </div>
        <Image src={newsletterImage} className={classes.image} />
      </div>
    </Dialog>
  );
}

export default Newsletter;

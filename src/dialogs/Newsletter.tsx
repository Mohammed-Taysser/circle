import {
  Button,
  Dialog,
  Image,
  Input,
  Text,
  Title,
  createStyles,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useLocalStorage } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { useEffect, useState } from 'react';
import newsletterImage from '../assets/images/background/newsletter.svg';

const useStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    padding: `calc(${theme.spacing.xl} * 2)`,
    borderRadius: theme.radius.md,
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column-reverse',
      padding: theme.spacing.xl,
    },
  },

  image: {
    maxWidth: '40%',
    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  body: {
    [theme.fn.smallerThan('sm')]: {
      marginTop: theme.spacing.xl,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    lineHeight: 1,
    marginBottom: theme.spacing.md,
  },

  controls: {
    display: 'flex',
    marginTop: theme.spacing.xl,
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: 0,
  },

  control: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
}));

function Newsletter() {
  const { classes } = useStyles();
  const [isSubscribe, setIsSubscribe] = useLocalStorage<boolean>({
    key: 'circle-newsletter-subscribe',
    defaultValue: false,
  });
  const [isOpened, setIsOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  useEffect(() => {
    let timerId = 0;

    if (!isSubscribe) {
      timerId = setTimeout(() => {
        setIsOpened(true);
      }, 10000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [isSubscribe]);

  const onFormSubmit = (values: { email: string }) => {
    console.log(values);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsOpened(false);
      setIsSubscribe(true);

      notifications.show({
        title: 'Successfully subscribed',
        message: 'Check your inbox to confirm subscribe in newsletter!',
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
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
                loading={isLoading}
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

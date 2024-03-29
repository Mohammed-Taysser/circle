import {
  Button,
  Group,
  Paper,
  SimpleGrid,
  Stack,
  Text,
  TextInput,
  Textarea,
  createStyles,
  rem,
} from '@mantine/core';
import { isEmail, isNotEmpty, useForm } from '@mantine/form';
import { notifications } from '@mantine/notifications';
import { IconAt, IconMapPin, IconPhone, IconSun } from '@tabler/icons-react';
import { useState } from 'react';
import { FiUser } from 'react-icons/fi';
import { MdOutlineAlternateEmail } from 'react-icons/md';
import { TbPencilMinus } from 'react-icons/tb';
import contactUsBG from '../../assets/images/background/contact-us-bg.svg';
import ContactIcon from '../../components/contactUs/ContactIcon';
import { uuidv4 } from '../../helpers';
import useHelmet from '../../hooks/useHelmet';

const MOCK_DATA = [
  { title: 'Email', description: 'mohammedtaysser983@gmail.com', icon: IconAt },
  { title: 'Phone', description: '+201015081861', icon: IconPhone },
  {
    title: 'Address',
    description: 'Egypt, Ad Daqahliyah, Markaz Meet Ghamr',
    icon: IconMapPin,
  },
  { title: 'Working hours', description: '7 a.m. - 10 p.m.', icon: IconSun },
];

const useWrapperStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan('sm');

  return {
    wrapper: {
      display: 'flex',
      backgroundColor:
        theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: rem(4),
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark'
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    form: {
      boxSizing: 'border-box',
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: `calc(${theme.spacing.xl} * 2)`,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: rem(-12),
    },

    fieldInput: {
      flex: 1,

      '& + &': {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: 'flex',

      [BREAKPOINT]: {
        flexDirection: 'column',
      },
    },

    contacts: {
      boxSizing: 'border-box',
      position: 'relative',
      borderRadius: theme.radius.lg,
      backgroundImage: `url(${contactUsBG})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      border: `${rem(1)} solid transparent`,
      padding: theme.spacing.xl,
      flex: `0 0 ${rem(280)}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

function ContactUs() {
  useHelmet('contactUs');
  const [isLoading, setIsLoading] = useState(false);
  const { classes } = useWrapperStyles();

  const form = useForm({
    validateInputOnChange: true,
    validateInputOnBlur: true,
    initialValues: {
      email: '',
      name: '',
      subject: '',
      message: '',
    },
    validate: {
      email: isEmail('Email is required'),
      name: isNotEmpty('Name is required'),
      subject: isNotEmpty('Subject is required'),
      message: isNotEmpty('Message is required'),
    },
  });

  const onFormSubmit = (values: any) => {
    console.log(values);

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);

      notifications.show({
        title: `Successfully send e-mail`,
        message: 'Thanks for contact us, we will replay as soon as possible',
        loading: false,
        color: '',
        autoClose: true,
      });

      form.reset();
    }, 2000);
  };

  return (
    <div className='h-full flex items-center'>
      <Paper shadow='md' radius='lg' w={'100%'}>
        <div className={classes.wrapper}>
          <div className={classes.contacts}>
            <Text fz='lg' fw={700} className={classes.title} c='#fff'>
              Contact information
            </Text>

            <Stack>
              {MOCK_DATA.map((item) => (
                <ContactIcon key={uuidv4()} {...item} />
              ))}
            </Stack>
          </div>

          <form className={classes.form} onSubmit={form.onSubmit(onFormSubmit)}>
            <Text fz='lg' fw={700} className={classes.title}>
              Get in touch
            </Text>

            <div className={classes.fields}>
              <SimpleGrid cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1 }]}>
                <TextInput
                  label='Your name'
                  name='name'
                  icon={<FiUser size='1rem' />}
                  placeholder='Your name'
                  {...form.getInputProps('name')}
                />
                <TextInput
                  label='Your email'
                  icon={<MdOutlineAlternateEmail size='1rem' />}
                  placeholder='example@domain.dev'
                  name='email'
                  type='email'
                  {...form.getInputProps('email')}
                />
              </SimpleGrid>

              <TextInput
                mt='md'
                label='Subject'
                name='subject'
                icon={<TbPencilMinus size='1rem' />}
                placeholder='Subject'
                {...form.getInputProps('subject')}
              />

              <Textarea
                mt='md'
                label='Your message'
                name='message'
                placeholder='Please include all relevant information'
                minRows={3}
                {...form.getInputProps('message')}
              />

              <Group position='right' mt='md'>
                <Button
                  type='submit'
                  className={classes.control}
                  loading={isLoading}
                >
                  Send message
                </Button>
              </Group>
            </div>
          </form>
        </div>
      </Paper>
    </div>
  );
}

export default ContactUs;

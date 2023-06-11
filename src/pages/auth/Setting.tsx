import { useDocumentTitle, useUncontrolled } from '@mantine/hooks';
import React from 'react';

import {
  Checkbox,
  Image,
  SimpleGrid,
  Text,
  UnstyledButton,
  createStyles,
  rem,
} from '@mantine/core';

const useStyles = createStyles((theme, { checked }: { checked: boolean }) => ({
  button: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    transition: 'background-color 150ms ease, border-color 150ms ease',
    border: `${rem(1)} solid ${
      checked
        ? theme.fn.variant({ variant: 'outline', color: theme.primaryColor })
            .border
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[3]
    }`,
    borderRadius: theme.radius.sm,
    padding: theme.spacing.sm,
    backgroundColor: checked
      ? theme.fn.variant({ variant: 'light', color: theme.primaryColor })
          .background
      : theme.colorScheme === 'dark'
      ? theme.colors.dark[8]
      : theme.white,
  },

  body: {
    flex: 1,
    marginLeft: theme.spacing.md,
  },
}));

interface ImageCheckboxProps {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?(checked: boolean): void;
  title: string;
  description: string;
  image: string;
}

export function ImageCheckbox({
  checked,
  defaultChecked,
  onChange,
  title,
  description,
  className,
  image,
  ...others
}: ImageCheckboxProps &
  Omit<React.ComponentPropsWithoutRef<'button'>, keyof ImageCheckboxProps>) {
  const [value, handleChange] = useUncontrolled({
    value: checked,
    defaultValue: defaultChecked,
    finalValue: false,
    onChange,
  });

  const { classes, cx } = useStyles({ checked: value });

  return (
    <UnstyledButton
      {...others}
      onClick={() => handleChange(!value)}
      className={cx(classes.button, className)}
    >
      <Image src={image} alt={title} width={40} />

      <div className={classes.body}>
        <Text color='dimmed' size='xs' sx={{ lineHeight: 1 }} mb={5}>
          {description}
        </Text>
        <Text weight={500} size='sm' sx={{ lineHeight: 1 }}>
          {title}
        </Text>
      </div>

      <Checkbox
        checked={value}
        onChange={() => {}}
        tabIndex={-1}
        styles={{ input: { cursor: 'pointer' } }}
      />
    </UnstyledButton>
  );
}

const mockdata = [
  {
    description: 'Sun and sea',
    title: 'Beach vacation',
    image: 'https://ui.mantine.dev/_next/static/media/sea.36b2d7d7.png',
  },
  {
    description: 'Sightseeing',
    title: 'City trips',
    image: 'https://ui.mantine.dev/_next/static/media/city.93e713a1.png',
  },
  {
    description: 'Mountains',
    title: 'Hiking vacation',
    image: 'https://ui.mantine.dev/_next/static/media/mountain.2e6150d2.png',
  },
  {
    description: 'Snow and ice',
    title: 'Winter vacation',
    image: 'https://ui.mantine.dev/_next/static/media/winter.5c69fc85.png',
  },
];

function Setting() {
  useDocumentTitle('Circle | Setting');
  const items = mockdata.map((item) => (
    <ImageCheckbox {...item} key={item.title} />
  ));
  return (
    <SimpleGrid
      cols={4}
      breakpoints={[
        { maxWidth: 'md', cols: 2 },
        { maxWidth: 'sm', cols: 1 },
      ]}
    >
      {items}
    </SimpleGrid>
  );
}

export default Setting;

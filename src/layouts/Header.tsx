import {
  ActionIcon,
  Burger,
  Header,
  MediaQuery,
  Text,
  useMantineColorScheme,
  useMantineTheme
} from '@mantine/core';
import { MantineLogo } from '@mantine/ds';
import { IconMoonStars, IconSun } from '@tabler/icons-react';

function Head(props: {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Header height={{ base: 50, md: 70 }} p='md'>
      <div className='h-full items-center flex'>
        <MantineLogo width='100' />
        <ActionIcon
          variant='default'
          onClick={() => toggleColorScheme()}
          size={30}
        >
          {colorScheme === 'dark' ? (
            <IconSun size='1rem' />
          ) : (
            <IconMoonStars size='1rem' />
          )}
        </ActionIcon>
        <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
          <Burger
            opened={props.opened}
            onClick={() => props.setOpened((o) => !o)}
            size='sm'
            color={theme.colors.gray[6]}
            mr='xl'
          />
        </MediaQuery>

        <Text>Application header</Text>
      </div>
    </Header>
  );
}

export default Head;

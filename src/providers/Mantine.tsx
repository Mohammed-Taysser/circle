import { MantineProvider, useMantineTheme } from '@mantine/core';
import { useEffect } from 'react';

function Mantine(props: MantineProviderProps) {
  const theme = useMantineTheme();

  useEffect(() => {
    if (props.colorScheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [props.colorScheme]);

  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        primaryColor: 'teal',
        colorScheme: props.colorScheme,
        fontFamily: `'Ubuntu', sans-serif`,
        components: {
          Input: {
            defaultProps: {
              radius: 'md',
            },
          },
        },
        breakpoints: {
          ...theme.breakpoints,
          xxl: '100em',
        },
      }}
    >
      {props.children}
    </MantineProvider>
  );
}

export default Mantine;

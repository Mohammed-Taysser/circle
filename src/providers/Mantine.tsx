import { MantineProvider } from '@mantine/core';

function Mantine(props: MantineProviderProps) {
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
      }}
    >
      {props.children}
    </MantineProvider>
  );
}

export default Mantine;

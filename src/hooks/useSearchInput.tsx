import { ScrollArea, useMantineTheme } from '@mantine/core';
import { modals } from '@mantine/modals';
import { useNavigate } from 'react-router-dom';

function useSearchInput() {
  const theme = useMantineTheme();
  const navigateTo = useNavigate();

  const onSearchInputClick = () =>
    modals.openContextModal({
      modal: 'search',
      title: '',
      innerProps: {
        navigateTo,
      },
      size: 'lg',
      centered: true,
      withCloseButton: false,
      scrollAreaComponent: ScrollArea.Autosize,
      overlayProps: {
        color:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[9]
            : theme.colors.gray[2],
        opacity: 0.55,
        blur: 3,
      },
    });

  return { onSearchInputClick };
}

export default useSearchInput;

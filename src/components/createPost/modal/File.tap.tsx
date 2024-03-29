import {
  Button,
  FileButton,
  Flex,
  Group,
  Text,
  ThemeIcon,
} from '@mantine/core';
import { formateUnit } from '../../../helpers/millify';

function FileTap(props: FileTapProps) {
  const { label } = props;

  return (
    <Flex align='center' gap={20}>
      <FileButton onChange={props.onChange} accept={props.accept}>
        {(props) => (
          <Button {...props} variant='default'>
            Upload {label}
          </Button>
        )}
      </FileButton>

      {props.file && (
        <Group spacing='xs'>
          <ThemeIcon variant='light' size='xl' color='gray'>
            <props.icon className='text-2xl' />
          </ThemeIcon>
          <div>
            <Text color='dimmed' size='xs'>
              {props.file.name}
            </Text>
            <Text color='dimmed' size='xs'>
              {formateUnit(props.file.size)}
            </Text>
          </div>
        </Group>
      )}
    </Flex>
  );
}

export default FileTap;

import { Container, Image, Text } from '@mantine/core';
import widgetShape from '../../assets/images/demo/widget-shape.png';
import widget from '../../assets/images/demo/widget.png';

function Widget() {
  return (
    <div className='widget-section my-28'>
      <Container>
        <div className='md:flex items-center gap-3 md:gap-10'>
          <div className='image-container'>
            <Image withPlaceholder src={widget} alt='widget' />

            <Image
              withPlaceholder
              src={widgetShape}
              alt='widget-shape'
              className='widget-shape'
            />
          </div>

          <div>
            <Text size='sm' tt='uppercase' color='teal'>
              Pre-Build Widgets
            </Text>

            <Text size='xl' weight='bold'>
              Useful Widgets Ready to Use For a Project
            </Text>

            <Text mt={15} color='dimmed' weight='lighter'>
              You can create a system for assigning user and profile badges.
              Circle allows users on your website to have badges in the same way
              there are badges on Twitter and Instagram for verified user
            </Text>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Widget;

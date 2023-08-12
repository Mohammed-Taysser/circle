import { Container, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import rocket from '../../assets/images/demo/demo-pages-rocket.png';
import { MODALS } from '../../constants/demo';
import SingleModalCol from './SingleModalCol';

function Modals() {
  const theme = useMantineTheme();

  return (
    <div className='modals-wrapper relative'>
      <Container>
        <SimpleGrid
          className='mb-20'
          cols={2}
          spacing='lg'
          breakpoints={[
            { maxWidth: theme.breakpoints.xs, cols: 1, spacing: 'sm' },
          ]}
        >
          <div>
            <Text size='sm' tt='uppercase' color='teal'>
              Available Modals
            </Text>

            <Text size='xl' weight='bold'>
              Fully Responsive & Mobile Friendly Theme
            </Text>

            <Text mt={15} color='dimmed' weight='lighter'>
              Circle theme is retina ready and fully responsive. From property
              details, maps, lists, agent details and contact form, every detail
              will display correctly on small devices.
            </Text>
          </div>
        </SimpleGrid>

        <SimpleGrid
          cols={3}
          spacing='lg'
          breakpoints={[
            { minWidth: theme.breakpoints.xl, cols: 4, spacing: 'lg' },
            { maxWidth: theme.breakpoints.md, cols: 2, spacing: 'md' },
            { maxWidth: theme.breakpoints.xs, cols: 1, spacing: 'sm' },
          ]}
        >
          {MODALS.map((modal) => (
            <SingleModalCol modal={modal} key={modal.label} />
          ))}
        </SimpleGrid>
      </Container>

      <img src={rocket} alt='rocket shape' className='demo-pages-rocket' />
    </div>
  );
}

export default Modals;

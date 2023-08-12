import { Container, SimpleGrid, Text, useMantineTheme } from '@mantine/core';
import wave from '../../assets/images/demo/demo-pages-wave.png';
import { SITEMAP } from '../../constants/demo';
import SinglePageCol from './SinglePageCol';

function Pages() {
  const theme = useMantineTheme();

  return (
    <>
      <div className='pages-wrapper'>
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
                Choose Demo
              </Text>

              <Text size='xl' weight='bold'>
                Useful pages Ready to Use For a Project
              </Text>

              <Text mt={15} color='dimmed' weight='lighter'>
                Create a really awesome website, choose the version that will
                suit your requirements in a best way.
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
            {SITEMAP.map((page) => (
              <SinglePageCol page={page} key={page.url} />
            ))}
          </SimpleGrid>
        </Container>
      </div>

      <img src={wave} alt='wave shape' className='demo-pages-wave' />
    </>
  );
}

export default Pages;

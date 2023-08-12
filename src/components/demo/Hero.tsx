import { Container, Image, Text } from '@mantine/core';
import hero from '../../assets/images/demo/hero.svg';

function Hero() {
  return (
    <div className='widget-section my-40'>
      <Container>
        <div className='md:flex items-center gap-3 md:gap-10'>
          <div>
            <Text size='sm' tt='uppercase' color='teal'>
              Circle is Here!
            </Text>

            <Text size='xl' weight='bold'>
              Set up your Social website with{' '}
              <span className='text-aurora'>Circle</span>
            </Text>

            <Text mt={15} color='dimmed' weight='lighter'>
              We included all you may need to build the best social network!
              Things like profile pages, news feed, friend groups, statistics,
              birthdays, community badges, events calendar, full music player
              and unique iconography! Have fun customizing it!
            </Text>
          </div>

          <div className='image-container'>
            <Image withPlaceholder src={hero} alt='hero' />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Hero;

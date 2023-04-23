import { Affix, Button, Transition } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { TfiAngleDoubleUp } from 'react-icons/tfi';

function BackToTop() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: '2rem', right: '2rem' }}>
      <Transition transition='slide-up' mounted={scroll.y > 500}>
        {(transitionStyles) => (
          <Button
            leftIcon={<TfiAngleDoubleUp />}
            style={transitionStyles}
            onClick={() => scrollTo({ y: 0 })}
          >
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  );
}

export default BackToTop;

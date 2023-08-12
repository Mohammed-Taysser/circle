import Hero from '../../components/demo/Hero';
import Modals from '../../components/demo/Modals';
import Pages from '../../components/demo/Pages';
import Widget from '../../components/demo/Widget';

function Demo() {
  return (
    <div className='demo-page'>
      <Hero />
      <Pages />
      <Widget />
      <Modals />
    </div>
  );
}

export default Demo;

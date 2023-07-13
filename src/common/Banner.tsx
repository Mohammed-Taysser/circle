import { Divider } from '@mantine/core';
import { BiConfused } from 'react-icons/bi';
import overlay from '../assets/images/background/banner-overlay.png';

/**
 * Banner component
 * @usage

- use `className` to add classes to banner wrapper
- use `title` to set banner title
- use `subtitle` to set banner subtitle
- use `icon` to change banner icon
 */
function Banner(props: BannerProps) {
  return (
    <div
      className={`banner rounded-xl py-20 px-12 overflow-hidden relative mb-8 z-10 leading-4 ${props.className}`}
      style={{
        backgroundImage: `url('${overlay}'), linear-gradient(to right, #20c997, #57e6b0fa) `,
      }}
    >
      <div className='flex items-center text-white'>
        <div className='text-6xl relative '>
          <props.icon className='inline-block' />
        </div>
        <Divider
          className='mx-8 border-white'
          size='md'
          orientation='vertical'
        />
        <div className='flex-1'>
          <h3 className='text-3xl font-bold mb-2 mt-0'>{props.title}</h3>
          <span className='inline-block'>{props.subtitle}</span>
        </div>
      </div>
    </div>
  );
}

Banner.defaultProps = {
  title: 'Title',
  subtitle: 'Subtitle',
  className: '',
  icon: BiConfused,
};

export default Banner;

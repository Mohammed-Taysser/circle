import { Divider } from '@mantine/core';
import { BiConfused } from 'react-icons/bi';
import { overlay } from '../constants/default';

/**
 * Banner component
 * @usage

- use `className` a string that allows for the addition of custom classes to the banner wrapper
- use `title` a string that sets the banner title
- use `subtitle`  a string that sets the banner subtitle
- use `icon` a React component that sets the banner icon
 */
function Banner(props: BannerProps) {
  return (
    <div
      className={`banner rounded-xl py-20 px-12 overflow-hidden relative mb-8 z-10 leading-4 ${props.className}`}
      style={{
        backgroundImage: `url('${overlay}'), linear-gradient(to right, #20c997, #57e6b0fa) `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
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

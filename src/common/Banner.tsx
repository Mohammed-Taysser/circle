import { BiConfused } from 'react-icons/bi';
import overlay from '../assets/images/background/banner-overlay.png';
import people from '../assets/images/background/people.png';
import React from 'react';

/**
 * Banner component
 * @usage

- use `className` to add classes to banner wrapper
- use `title` to set banner title
- use `subtitle` to set banner subtitle

 * @returns {React.ReactElement}
 */
function Banner(props: BannerProps): React.ReactElement {
  return (
    <div className={`banner ${props.className}`}>
      <div className='media'>
        <div className='icon'>
          <props.icon />
        </div>
        <div className='media-body'>
          <h3 className='item-title'>{props.title}</h3>
          <div className='item-list-tabs'>
            <ul>
              <li>{props.subtitle}</li>
            </ul>
          </div>
        </div>
      </div>
      <ul className='animation-img'>
        <li>
          <img src={overlay} alt='overlay-shape' className='w-full' />
        </li>
        <li>
          <img src={people} alt='people' className='hidden lg:block' />
        </li>
      </ul>
    </div>
  );
}

Banner.defaultProp = {
  title: 'Title',
  subtitle: 'Subtitle',
  className: '',
  icon: BiConfused,
};

export default Banner;

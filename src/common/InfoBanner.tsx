import { Tooltip } from '@mantine/core';
import { VscVerified } from 'react-icons/vsc';
import Avatar from './Avatar';

/**
 * InfoBanner component
 * @usage

- use `cover` to set cover
- use `avatar` to set avatar
- use `name` to set user name
- use `username` to set username
- use `verified` to set if profile verified or not
- use `extraInfo` to set extraInfo line
- use `className` to add classes to banner wrapper
*/
function InfoBanner(props: InfoBannerProp) {
  return (
    <div
      className={`banner-user ${props.className}`}
      style={{
        backgroundImage: `url('${props.cover}')`,
      }}
    >
      <div className='media'>
        <Avatar src={props.avatar} alt={`picture of ${props.name}`} />
        <div className='media-body md:ml-7'>
          <h3 className='item-title flex items-center'>
            {props.name && <span>{props.name}</span>}
            {props.verified && (
              <Tooltip label='Verified' withArrow color='teal'>
                <div>
                  <VscVerified className='mx-1' />
                </div>
              </Tooltip>
            )}
          </h3>
          {props.username && (
            <div className='item-subtitle my-2'>@{props.username}</div>
          )}
          {props.extraInfo}
        </div>
      </div>
    </div>
  );
}

InfoBanner.defaultProps = {
  cover: '',
  avatar: '',
  name: '',
  username: '',
  className: '',
  verified: false,
  extraInfo: <></>,
};

export default InfoBanner;

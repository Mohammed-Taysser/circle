import { Tooltip } from '@mantine/core';
import { VscVerified } from 'react-icons/vsc';
import Avatar from './Avatar';

/**
 * InfoBanner component
 * 
 * displays a banner with user information, including a cover image, avatar, name, username, and extra information. It also has an option to display a verification badge if the user is verified. The class allows for customization through props, such as setting the cover image and avatar.
 * 
 * @usage

- use `cover` string representing the URL of the cover image
- use `avatar` string representing the URL of the avatar image
- use `name` string representing the user's name
- use `username` string representing the user's username
- use `verified` boolean representing whether the user is verified or not
- use `extraInfo` JSX element representing any additional information to display in the banner
- use `className` string representing additional CSS classes to apply to the banner
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

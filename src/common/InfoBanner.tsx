import { Tooltip } from '@mantine/core';
import { VscVerified } from 'react-icons/vsc';
import Avatar from './Avatar';

function InfoBanner(props: InfoBannerProp) {
  return (
    <div
      className='banner-user'
      style={{
        backgroundImage: `url('${props.cover}')`,
      }}
    >
      <div className='media'>
        <Avatar src={props.avatar} alt={`picture of ${props.name}`} />
        <div className='media-body ml-7'>
          <h3 className='item-title flex items-center'>
            <span>{props.name}</span>
            {props.verified && (
              <Tooltip label='Verified' withArrow color='teal'>
                <div>
                  <VscVerified className='mx-1' />
                </div>
              </Tooltip>
            )}
          </h3>
          <div className='item-subtitle my-2'>@{props.username}</div>
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
  verified: false,
  extraInfo: <></>,
};

export default InfoBanner;

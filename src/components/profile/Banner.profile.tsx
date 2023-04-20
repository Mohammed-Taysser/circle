import { Tooltip } from '@mantine/core';
import { FiUserPlus, FiUsers } from 'react-icons/fi';
import { VscFeedback, VscVerified } from 'react-icons/vsc';
import { BiBookReader, BiUserVoice } from 'react-icons/bi';
import Avatar from '../../common/Avatar';

function BannerProfile() {
  return (
    <div
      className='banner-user'
      style={{
        backgroundImage:
          'url(https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/buddypress/members/1/cover-image/60b0724fc9a1a-bp-cover-image.jpg)',
      }}
    >
      <div className='media'>
        <Avatar
          src='https://res.cloudinary.com/mohammed-taysser/image/upload/v1654679434/paperCuts/authors/avatar-2_grpukn.png'
          alt='Profile picture of Mohammed Taysser'
        />
        <div className='media-body ml-7'>
          <h3 className='item-title flex items-center'>
            <span>Mohammed Taysser</span>
            <Tooltip label='Verified' withArrow color='teal'>
              <div>
                <VscVerified className='mx-1' />
              </div>
            </Tooltip>
          </h3>
          <div className='item-subtitle'>@mohammed-taysser</div>
          <div className='item-subtitle mb-2 flex items-center'>
            <Tooltip label='Friends' withArrow>
              <div className='flex items-center'>
                <FiUsers /> <span className='mx-1 text-sm'>12</span>
              </div>
            </Tooltip>
            <Tooltip label='Posts' withArrow>
              <div className='flex items-center mx-1'>
                <VscFeedback /> <span className='mx-1 text-sm'>12</span>
              </div>
            </Tooltip>
            <Tooltip label='Followers' withArrow>
              <div className='flex items-center mx-1'>
                <BiUserVoice />
                <span className='mx-1 text-sm'>303,202,2</span>
              </div>
            </Tooltip>
            <Tooltip label='Following' withArrow>
              <div className='flex items-center mx-1'>
                <FiUserPlus /> <span className='mx-1 text-sm'>1023</span>
              </div>
            </Tooltip>
            <Tooltip label='Viewers' withArrow>
              <div className='flex items-center mx-1'>
                <BiBookReader /> <span className='mx-1 text-sm'>258941</span>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerProfile;

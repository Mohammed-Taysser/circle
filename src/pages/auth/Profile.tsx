import { Tooltip } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { BiBookReader, BiUserVoice } from 'react-icons/bi';
import { BsCardImage, BsPersonBadge, BsPersonVideo3 } from 'react-icons/bs';
import { FiUserPlus, FiUsers } from 'react-icons/fi';
import { MdGroups2, MdOutlineAudiotrack } from 'react-icons/md';
import { RiQuillPenLine } from 'react-icons/ri';
import { TbTimelineEventText } from 'react-icons/tb';
import { VscFeedback } from 'react-icons/vsc';
import avatar from '../../assets/images/default/avatar.png';
import cover from '../../assets/images/default/cover.jpg';
import InfoBanner from '../../common/InfoBanner';
import Taps from '../../common/Taps';

function Profile() {
  useDocumentTitle('Mantine | Profile');
  const userId = 10;

  const TAPS = [
    {
      label: 'Timeline',
      path: `/profile/${userId}`,
      icon: TbTimelineEventText,
    },
    {
      label: 'About',
      path: `/profile/${userId}/about`,
      icon: RiQuillPenLine,
    },
    {
      label: 'Friends',
      path: `/profile/${userId}/friends`,
      icon: FiUsers,
    },
    {
      label: 'Photos',
      path: `/profile/${userId}/photos`,
      icon: BsCardImage,
    },
    {
      label: 'Audio',
      path: `/profile/${userId}/audio`,
      icon: MdOutlineAudiotrack,
    },
    {
      label: 'Videos',
      path: `/profile/${userId}/videos`,
      icon: BsPersonVideo3,
    },
    {
      label: 'Groups',
      path: `/profile/${userId}/groups`,
      icon: MdGroups2,
    },
    {
      label: 'Badges',
      path: `/profile/${userId}/badges`,
      icon: BsPersonBadge,
    },
  ];

  return (
    <div className='profile-page'>
      <InfoBanner
        avatar={avatar}
        cover={cover}
        username='mohammed-taysser'
        name='Mohammed Taysser'
        verified
        extraInfo={
          <div className='mb-2 flex items-center'>
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
        }
      />
      <Taps taps={TAPS} />
    </div>
  );
}

export default Profile;

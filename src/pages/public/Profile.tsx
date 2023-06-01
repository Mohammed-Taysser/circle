import { Tooltip } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { BiBookReader, BiUserVoice } from 'react-icons/bi';
import { BsPersonBadge, BsPersonVideo3 } from 'react-icons/bs';
import { FiUserPlus, FiUsers } from 'react-icons/fi';
import { IoImagesOutline } from 'react-icons/io5';
import { MdGroups2, MdOutlineAudiotrack } from 'react-icons/md';
import { RiQuillPenLine } from 'react-icons/ri';
import { TbTimelineEventText } from 'react-icons/tb';
import { VscFeedback } from 'react-icons/vsc';
import { useParams } from 'react-router-dom';
import avatar from '../../assets/images/default/avatar.png';
import cover from '../../assets/images/default/cover.jpg';
import InfoBanner from '../../common/InfoBanner';
import Taps from '../../common/Taps';

function Profile() {
  useDocumentTitle('Mantine | Profile');
  const { profileId = '' } = useParams();

  const TAPS = [
    {
      label: 'Timeline',
      path: `/profile/${profileId}`,
      icon: TbTimelineEventText,
    },
    {
      label: 'About',
      path: `/profile/${profileId}/about`,
      icon: RiQuillPenLine,
    },
    {
      label: 'Friends',
      path: `/profile/${profileId}/friends`,
      icon: FiUsers,
    },
    {
      label: 'Photos',
      path: `/profile/${profileId}/photos`,
      icon: IoImagesOutline,
    },
    {
      label: 'Audio',
      path: `/profile/${profileId}/audio`,
      icon: MdOutlineAudiotrack,
    },
    {
      label: 'Videos',
      path: `/profile/${profileId}/videos`,
      icon: BsPersonVideo3,
    },
    {
      label: 'Badges',
      path: `/profile/${profileId}/badges`,
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

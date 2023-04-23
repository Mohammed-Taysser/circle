import { Tooltip } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { BsPersonBadge, BsPersonVideo3 } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';
import { IoImagesOutline } from 'react-icons/io5';
import { MdOutlineAudiotrack } from 'react-icons/md';
import { RiQuillPenLine } from 'react-icons/ri';
import { TbEyeglass, TbTimelineEventText } from 'react-icons/tb';
import { VscFeedback } from 'react-icons/vsc';
import { useParams } from 'react-router-dom';
import cover from '../../assets/images/default/cover.jpg';
import avatar from '../../assets/images/default/group.jpg';
import InfoBanner from '../../common/InfoBanner';
import Taps from '../../common/Taps';

function SingleGroup() {
  useDocumentTitle('Mantine | Developer Geeks');
  const { groupId = '' } = useParams();

  const TAPS = [
    {
      label: 'Timeline',
      path: `/group/${groupId}`,
      icon: TbTimelineEventText,
    },
    {
      label: 'About',
      path: `/group/${groupId}/about`,
      icon: RiQuillPenLine,
    },
    {
      label: 'Members',
      path: `/group/${groupId}/members`,
      icon: FiUsers,
    },
    {
      label: 'Photos',
      path: `/group/${groupId}/photos`,
      icon: IoImagesOutline,
    },
    {
      label: 'Audio',
      path: `/group/${groupId}/audio`,
      icon: MdOutlineAudiotrack,
    },
    {
      label: 'Videos',
      path: `/group/${groupId}/videos`,
      icon: BsPersonVideo3,
    },
    {
      label: 'Badges',
      path: `/group/${groupId}/badges`,
      icon: BsPersonBadge,
    },
  ];

  return (
    <div>
      <InfoBanner
        avatar={avatar}
        cover={cover}
        username='developer-geeks'
        name='Developer Geeks'
        verified
        extraInfo={
          <div className='mb-2 flex items-center'>
            <Tooltip label='Members' withArrow>
              <div className='flex items-center'>
                <FiUsers /> <span className='mx-1 text-sm'>1200</span>
              </div>
            </Tooltip>
            <Tooltip label='Posts' withArrow>
              <div className='flex items-center mx-1'>
                <VscFeedback /> <span className='mx-1 text-sm'>102</span>
              </div>
            </Tooltip>
            <Tooltip label='Visibility' withArrow>
              <div className='flex items-center mx-1'>
                <TbEyeglass /> <span className='mx-1 text-sm'>Public</span>
              </div>
            </Tooltip>
          </div>
        }
      />
      <Taps taps={TAPS} />
    </div>
  );
}

export default SingleGroup;

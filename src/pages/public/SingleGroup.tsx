import { Button, Flex, Text, Tooltip } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { AiOutlineUsergroupAdd } from 'react-icons/ai';
import { BsPersonBadge, BsPersonVideo3 } from 'react-icons/bs';
import { FaPersonRunning } from 'react-icons/fa6';
import { FiUsers } from 'react-icons/fi';
import { IoImagesOutline } from 'react-icons/io5';
import { MdOutlineAudiotrack } from 'react-icons/md';
import { RiQuillPenLine } from 'react-icons/ri';
import { TbEyeglass, TbTimelineEventText } from 'react-icons/tb';
import { VscFeedback } from 'react-icons/vsc';
import { useParams } from 'react-router-dom';
import InfoBanner from '../../common/InfoBanner';
import Taps from '../../common/Taps';
import { avatar, cover } from '../../constants/default';
import { formateNumber } from '../../helpers/millify';

function SingleGroup() {
  useDocumentTitle('Circle | Developer Geeks'); // TODO: improve SEO
  const { groupId = '' } = useParams();
  const isJoined = false; // TODO: find suitable algorithm
  const [isLoading, setIsLoading] = useState(false);

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

  const onJoinBtnClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      notifications.show({
        title: 'Successfully join',
        message: 'Hey there, welcome to Developer Geeks!',
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  const onLeaveBtnClick = () => {
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size='sm'>
          This action is so important that you are required to confirm it. Are
          you sure to leave <strong>Developer Geeks</strong>
        </Text>
      ),
      labels: { confirm: 'Yes, Leave', cancel: 'Cancel' },
      onConfirm: onLeaveConfirmBtnClick,
    });
  };

  const onLeaveConfirmBtnClick = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      notifications.show({
        title: 'Successfully leave',
        message: 'Hey there, you successfully leave Developer Geeks group',
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  return (
    <div>
      <InfoBanner
        avatar={avatar}
        cover={cover}
        username='developer-geeks'
        name='Developer Geeks'
        verified
        extraInfo={
          <Flex justify='space-between'>
            <div className='flex-1 flex gap-3 items-center justify-center md:justify-start '>
              <Tooltip label='Members' withArrow>
                <div className='flex items-center gap-1'>
                  <FiUsers />
                  <span className='text-sm'>{formateNumber(1200)}</span>
                </div>
              </Tooltip>
              <Tooltip label='Posts' withArrow>
                <div className='flex items-center gap-1'>
                  <VscFeedback />
                  <span className='text-sm'>{formateNumber(102)}</span>
                </div>
              </Tooltip>
              <Tooltip label='Visibility' withArrow>
                <div className='flex items-center gap-1'>
                  <TbEyeglass /> <span className='text-sm'>Public</span>
                </div>
              </Tooltip>
            </div>
            <div>
              {isJoined ? (
                <Button
                  size='xs'
                  loading={isLoading}
                  onClick={onJoinBtnClick}
                  leftIcon={<AiOutlineUsergroupAdd className='text-lg' />}
                >
                  Join
                </Button>
              ) : (
                <Button
                  variant='default'
                  size='xs'
                  loading={isLoading}
                  onClick={onLeaveBtnClick}
                  leftIcon={<FaPersonRunning className='text-lg' />}
                >
                  Leave
                </Button>
              )}
            </div>
          </Flex>
        }
      />
      <Taps taps={TAPS} />
    </div>
  );
}

export default SingleGroup;

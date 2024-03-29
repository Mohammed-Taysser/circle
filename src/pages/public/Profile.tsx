import { Button, Flex, Text, Tooltip } from '@mantine/core';
import { modals } from '@mantine/modals';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { BiUserVoice } from 'react-icons/bi';
import { BsPersonBadge, BsPersonVideo3 } from 'react-icons/bs';
import { FiUserCheck, FiUserPlus, FiUserX, FiUsers } from 'react-icons/fi';
import { IoImagesOutline } from 'react-icons/io5';
import { MdOutlineAudiotrack } from 'react-icons/md';
import { RiQuillPenLine } from 'react-icons/ri';
import { TbTimelineEventText } from 'react-icons/tb';
import { VscFeedback } from 'react-icons/vsc';
import { useParams } from 'react-router-dom';
import InfoBanner from '../../common/InfoBanner';
import Taps from '../../common/Taps';
import { cover } from '../../constants/default';
import { formateNumber } from '../../helpers/millify';
import useHelmet from '../../hooks/useHelmet';

function Profile() {
  useHelmet('profile'); // TODO: improve SEO
  const { profileId = '' } = useParams();
  const isFriend = false; // TODO: find suitable algorithm
  const isFollow = false; // TODO: find suitable algorithm
  const [isLoading, setIsLoading] = useState({
    friend: false,
    follow: false,
  });

  const onAddFriendBtnClick = () => {
    setIsLoading((prev) => ({ ...prev, friend: true }));

    setTimeout(() => {
      setIsLoading((prev) => ({ ...prev, friend: false }));

      notifications.show({
        title: 'Successfully Friend request send',
        message: 'Hey there, an request had been send to mohammed!',
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  const onFollowBtnClick = () => {
    setIsLoading((prev) => ({ ...prev, follow: true }));

    setTimeout(() => {
      setIsLoading((prev) => ({ ...prev, follow: false }));

      notifications.show({
        title: 'Successfully follow',
        message: 'Hey there, Successfully follow mohammed!',
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  const onUnFollowBtnClick = () => {
    setIsLoading((prev) => ({ ...prev, follow: true }));

    setTimeout(() => {
      setIsLoading((prev) => ({ ...prev, follow: false }));

      notifications.show({
        title: 'Successfully un follow',
        message: 'Hey there, Successfully un follow mohammed!',
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

  const onUnfriendBtnClick = () => {
    modals.openConfirmModal({
      title: 'Please confirm your action',
      children: (
        <Text size='sm'>
          This action is so important that you are required to confirm it. Are
          you sure to unfriend <strong>Aurora Light</strong>
        </Text>
      ),
      labels: { confirm: 'Yes, Leave', cancel: 'Cancel' },
      onConfirm: onUnfriendConfirmBtnClick,
    });
  };

  const onUnfriendConfirmBtnClick = () => {
    setIsLoading((prev) => ({ ...prev, friend: true }));

    setTimeout(() => {
      setIsLoading((prev) => ({ ...prev, friend: false }));

      notifications.show({
        title: 'Successfully unfriend',
        message: 'Hey there, you successfully unfriend mohammed',
        loading: false,
        withCloseButton: true,
        autoClose: true,
      });
    }, 2000);
  };

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
        avatar={
          'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf04a6b-bpthumb.jpg'
        }
        cover={cover}
        username='aurora-light'
        name='Aurora Light'
        verified
        extraInfo={
          <Flex
            justify='space-between'
            wrap='wrap'
            rowGap={2}
            direction={{ sm: 'row', base: 'column' }}
          >
            <div className='flex items-center justify-center md:justify-start gap-4'>
              <Tooltip label='Friends' withArrow>
                <div className='flex items-center gap-1'>
                  <FiUsers />
                  <span className='text-sm'>{formateNumber(1412)}</span>
                </div>
              </Tooltip>
              <Tooltip label='Posts' withArrow>
                <div className='flex items-center gap-1'>
                  <VscFeedback />
                  <span className='text-sm'>{formateNumber(124411)}</span>
                </div>
              </Tooltip>
              <Tooltip label='Followers' withArrow>
                <div className='flex items-center gap-1'>
                  <BiUserVoice />
                  <span className='text-sm'>{formateNumber(30302202)}</span>
                </div>
              </Tooltip>
              <Tooltip label='Following' withArrow>
                <div className='flex items-center gap-1'>
                  <FiUserPlus />
                  <span className='text-sm'>{formateNumber(10243)}</span>
                </div>
              </Tooltip>
            </div>
            <Flex
              gap={10}
              className='mt-4 md:mt-0 justify-center md:justify-start'
            >
              {isFriend ? (
                <Button
                  size='xs'
                  loading={isLoading.friend}
                  onClick={onAddFriendBtnClick}
                  leftIcon={<FiUserPlus className='text-lg' />}
                >
                  Add Friend
                </Button>
              ) : (
                <Button
                  variant='default'
                  size='xs'
                  loading={isLoading.friend}
                  onClick={onUnfriendBtnClick}
                  leftIcon={<FiUserX className='text-lg' />}
                >
                  Unfriend
                </Button>
              )}
              {isFollow ? (
                <Button
                  size='xs'
                  loading={isLoading.follow}
                  onClick={onFollowBtnClick}
                  leftIcon={<FiUserCheck className='text-lg' />}
                >
                  Follow
                </Button>
              ) : (
                <Button
                  size='xs'
                  variant='default'
                  loading={isLoading.follow}
                  onClick={onUnFollowBtnClick}
                  leftIcon={<FiUserX className='text-lg' />}
                >
                  Un follow
                </Button>
              )}
            </Flex>
          </Flex>
        }
      />
      <Taps taps={TAPS} />
    </div>
  );
}

export default Profile;

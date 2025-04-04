import {
  ColorSwatch,
  Menu,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { useMemo, useState } from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { IoHelpSharp, IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';
import { TfiAngleDown } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import Avatar from '../../../common/Avatar';
import { USER_STATUS } from '../../../constants/layout';
import { getImageURL } from '../../../helpers';
import {
  createSelector,
  useAppDispatch,
  useAppSelector,
} from '../../../hooks/useRedux';
import { logout } from '../../../redux/features/auth.slice';
import { AiOutlineDashboard } from 'react-icons/ai';

function UserDropdown(props: { className?: string }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [status, setStatus] = useState(USER_STATUS.online);

  const dispatch = useAppDispatch();
  const authState = useAppSelector(createSelector((state) => state.auth));

  const onStatusChange = (status: SingleUserStatus) => {
    setStatus(status);
  };

  const onLogoutClick = () => {
    dispatch(logout());
  };

  const fullName = useMemo(() => {
    if (!authState.data) {
      return '';
    }

    return `${authState.data.firstName} ${authState.data.lastName}`;
  }, [authState.data]);

  if (!authState.data) {
    return null;
  }

  return (
    <div className={`flex justify-end ${props.className}`}>
      <Menu withArrow width={200}>
        <Menu.Target>
          <UnstyledButton
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[0]
                  : theme.black,
            })}
          >
            <div className='flex gap-3 items-center'>
              <Avatar
                src={getImageURL(authState.data.avatar)}
                status={status.color}
                sm
                alt={fullName}
              />

              <div className='flex-1'>
                <Text size='sm' weight={500} className='dark:text-white'>
                  {fullName}
                </Text>

                <Text color='dimmed' size='xs'>
                  @{authState.data.username}
                </Text>
              </div>

              <TfiAngleDown />
            </div>
          </UnstyledButton>
        </Menu.Target>

        <Menu.Dropdown className='border-0 shadow-nice'>
          <Menu.Label>Application</Menu.Label>
          <Menu.Item
            onClick={() => toggleColorScheme()}
            icon={
              colorScheme === 'dark' ? (
                <BsSun size={14} />
              ) : (
                <BsMoonStars size={14} />
              )
            }
          >
            {colorScheme === 'dark' ? 'Light' : 'Dark'} mode
          </Menu.Item>

          <Menu.Item
            component={Link}
            to={`/profile/${authState.data._id}`}
            icon={<FiUser size={14} />}
          >
            Profile
          </Menu.Item>

          <Menu.Item
            component={Link}
            to='/message'
            icon={<BiMessageDetail size={14} />}
          >
            Messenger
          </Menu.Item>

          <Menu.Item
            component={Link}
            to='/setting'
            icon={<IoSettingsOutline size={14} />}
          >
            Setting
          </Menu.Item>

          <Menu.Item
            component={Link}
            to='/help'
            icon={<IoHelpSharp size={14} />}
          >
            Help
          </Menu.Item>

          {authState.data.role === 'admin' && (
            <Menu.Item
              component={Link}
              to='/dashboard'
              icon={<AiOutlineDashboard size={14} />}
            >
              Dashboard
            </Menu.Item>
          )}

          <Menu.Label>Status</Menu.Label>

          {Object.keys(USER_STATUS).map((key) => {
            const status = USER_STATUS[key as StatusSlug];

            return (
              <Menu.Item
                key={key}
                onClick={() => onStatusChange(status)}
                icon={<ColorSwatch size={10} color={status.color} />}
              >
                {status.title}
              </Menu.Item>
            );
          })}

          <Menu.Label>Danger zone</Menu.Label>
          <Menu.Item
            color='red'
            onClick={onLogoutClick}
            icon={<MdOutlineLogout size={14} />}
          >
            Logout
          </Menu.Item>
        </Menu.Dropdown>
      </Menu>
    </div>
  );
}

UserDropdown.defaultProps = {
  className: '',
};

export default UserDropdown;

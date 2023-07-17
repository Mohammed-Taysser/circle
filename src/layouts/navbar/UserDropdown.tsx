import {
  ColorSwatch,
  Indicator,
  Menu,
  Text,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import { useState } from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { FiUser } from 'react-icons/fi';
import { IoSettingsOutline } from 'react-icons/io5';
import { MdOutlineLogout } from 'react-icons/md';
import { TfiAngleDown } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import avatar from '../../../src/assets/images/default/avatar.png';
import Avatar from '../../common/Avatar';
import { DROPDOWN_STATUS } from '../../constants/navbar';

function UserDropdown(props: { className: string }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [status, setStatus] = useState(DROPDOWN_STATUS[0]);

  const onStatusChange = (status: { color: string; title: string }) => {
    setStatus(status);
  };

  const onLogoutClick = () => {
    console.log('logout');
  };

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
              <Indicator
                color={status.color}
                offset={7}
                processing
                withBorder
                position='bottom-end'
              >
                <Avatar src={avatar} sm alt='Mohammed Taysser' />
              </Indicator>

              <div className='flex-1'>
                <Text size='sm' weight={500}>
                  Mohammed Taysser
                </Text>

                <Text color='dimmed' size='xs'>
                  @mohammed-taysser
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
            to={`/profile/1`}
            icon={<FiUser size={14} />}
          >
            Profile
          </Menu.Item>
          <Menu.Item
            component={Link}
            to={`/messenger`}
            icon={<BiMessageDetail size={14} />}
          >
            Messages
          </Menu.Item>
          <Menu.Item
            component={Link}
            to={`/setting`}
            icon={<IoSettingsOutline size={14} />}
          >
            Settings
          </Menu.Item>

          <Menu.Label>Status</Menu.Label>

          {DROPDOWN_STATUS.map((status) => (
            <Menu.Item
              key={status.title}
              onClick={() => onStatusChange(status)}
              icon={<ColorSwatch size={10} color={status.color} />}
            >
              {status.title}
            </Menu.Item>
          ))}

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

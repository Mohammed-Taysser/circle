import {
  ColorSwatch,
  Menu,
  Text,
  UnstyledButton,
  useMantineColorScheme
} from '@mantine/core';
import { useState } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';
import { MdOutlineLogout } from 'react-icons/md';
import { TfiAngleDown } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import Avatar from '../../common/Avatar';
import { avatar } from '../../constants/default';
import { USER_DROPDOWN_LINKS, USER_STATUS } from '../../constants/layout';

function UserDropdown(props: { className: string }) {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const [status, setStatus] = useState(USER_STATUS.online);

  const onStatusChange = (status: SingleUserStatus) => {
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
              <Avatar
                src={avatar}
                status={status.color}
                sm
                alt='Mohammed Taysser'
              />

              <div className='flex-1'>
                <Text size='sm' weight={500} className='dark:text-white'>
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

          {USER_DROPDOWN_LINKS.map((link) => (
            <Menu.Item
              component={Link}
              key={link.path}
              to={link.path}
              icon={<link.icon size={14} />}
            >
              {link.label}
            </Menu.Item>
          ))}

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

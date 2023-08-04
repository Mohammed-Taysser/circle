import { Button, Tabs } from '@mantine/core';
import { useClickOutside, useMediaQuery } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { useMemo, useState } from 'react';
import { VscSettings } from 'react-icons/vsc';
import Banner from '../../common/Banner';
import BasicInfo from '../../components/settings/BasicInfo';
import ChangePassword from '../../components/settings/ChangePassword';
import ContactInfo from '../../components/settings/ContactInfo';
import EducationAndOthersInformation from '../../components/settings/EducationAndOthersInformation';
import HobbiesAndInterests from '../../components/settings/HobbiesAndInterests';
import useHelmet from '../../hooks/useHelmet';

const TOC = [
  {
    label: 'Contact Info',
    id: 'contactInfo',
    component: ContactInfo,
  },
  {
    label: 'Basic Info',
    id: 'basicInfo',
    component: BasicInfo,
  },
  {
    label: 'Change Password',
    id: 'changePassword',
    component: ChangePassword,
  },
  {
    label: 'Education And Others Information',
    id: 'educationAndOthersInformation',
    component: EducationAndOthersInformation,
  },
  {
    label: 'Hobbies and Interests',
    id: 'hobbiesAndInterests',
    component: HobbiesAndInterests,
  },
];

function Setting() {
  useHelmet('setting');
  const [buttonRef, setButtonRef] = useState<HTMLButtonElement | null>(null);
  const isSmallerThanMd = useMediaQuery('(max-width: 56.25em)');
  const [isLoading, setIsLoading] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const tapsRef = useClickOutside(() => setIsOpened(false), null, [buttonRef]);

  const onFormSubmit = (hasChanges: boolean, values: any) => {
    console.log(values);

    if (hasChanges) {
      setIsLoading(true);

      setTimeout(() => {
        setIsLoading(false);

        notifications.show({
          title: 'Successfully save changes',
          message: 'Hey there, your changes is successfully saved!',
          loading: false,
          withCloseButton: true,
          autoClose: true,
        });
      }, 2000);
    }
  };

  const tapsClasses = useMemo(() => {
    if (isSmallerThanMd) {
      const cls = `absolute z-10 bg-white shadow-nice p-4 max-w-[250px] duration-300 `;
      const left = isOpened ? 'left-5' : '-left-[280px]';
      return cls + left;
    }
    return '';
  }, [isSmallerThanMd, isOpened]);

  return (
    <>
      <Banner
        title='Setting'
        subtitle='Customize your preference'
        icon={VscSettings}
      />

      <div className='shadow-nice p-5 md:p-10 rounded-lg mb-20 bg-white relative'>
        <Button
          onClick={() => setIsOpened((prev) => !prev)}
          ref={setButtonRef}
          className='mb-4 md:hidden'
        >
          {isOpened ? 'Close' : 'Open'} Menu
        </Button>

        <Tabs defaultValue={TOC[0].id} orientation='vertical' ref={tapsRef}>
          <Tabs.List className={tapsClasses}>
            {TOC.map((item) => (
              <Tabs.Tab value={item.id} key={item.id}>
                {item.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          <div className='md:px-10 w-full'>
            {TOC.map((item) => (
              <Tabs.Panel value={item.id} key={item.id}>
                <item.component
                  isLoading={isLoading}
                  onFormSubmit={onFormSubmit}
                />
              </Tabs.Panel>
            ))}
          </div>
        </Tabs>
      </div>
    </>
  );
}

export default Setting;

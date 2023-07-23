import { Tabs } from '@mantine/core';
import { useDocumentTitle, useMediaQuery } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';
import { useState } from 'react';
import { VscSettings } from 'react-icons/vsc';
import Banner from '../../common/Banner';
import { TOC } from '../../constants/setting';

function Setting() {
  useDocumentTitle('Circle | Setting');
  const isSmallerThanMd = useMediaQuery('(min-width: 56.25em)');
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <>
      <Banner
        title='Setting'
        subtitle='Customize your preference'
        icon={VscSettings}
      />

      <div className='shadow-nice p-10 rounded-lg mb-20 bg-white'>
        <Tabs
          defaultValue={TOC[0].id}
          orientation={isSmallerThanMd ? 'vertical' : 'horizontal'}
        >
          <Tabs.List className={isSmallerThanMd ? 'mb-10' : ''}>
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

import { Tabs } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { VscSettings } from 'react-icons/vsc';
import Banner from '../../common/Banner';
import { TOC } from '../../constants/setting';

function Setting() {
  useDocumentTitle('Circle | Setting');

  return (
    <>
      <Banner
        title='Setting'
        subtitle='Customize your preference'
        icon={VscSettings}
      />

      <div className='shadow-nice p-10 rounded-lg mb-20 bg-white'>
        <Tabs defaultValue={TOC[0].id} orientation='vertical'>
          <Tabs.List>
            {TOC.map((item) => (
              <Tabs.Tab value={item.id} key={item.id}>
                {item.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          <div className='px-10 w-full'>
            {TOC.map((item) => (
              <Tabs.Panel value={item.id} key={item.id}>
                <item.component />
              </Tabs.Panel>
            ))}
          </div>
        </Tabs>
      </div>
    </>
  );
}

export default Setting;

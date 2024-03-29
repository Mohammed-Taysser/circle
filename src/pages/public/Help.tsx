import { Anchor, Image } from '@mantine/core';
import { TbProgressHelp } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import calenderImage from '../../assets/images/background/help/calender.svg';
import contactImage from '../../assets/images/background/help/contact.svg';
import editorImage from '../../assets/images/background/help/editor.svg';
import Banner from '../../common/Banner';
import { uuidv4 } from '../../helpers';
import useHelmet from '../../hooks/useHelmet';

const HELP_PAGES = [
  {
    img: calenderImage,
    title: 'Calender',
    url: '/help/calender',
  },
  {
    img: editorImage,
    title: 'Editor',
    url: '/help/editor',
  },
  {
    img: contactImage,
    title: 'Contact Us',
    url: '/contact-us',
  },
];

function Help() {
  useHelmet('help');

  return (
    <>
      <Banner
        title='Help'
        subtitle={`Find what you need`}
        icon={TbProgressHelp}
      />
      <div className='md:grid grid-cols-2 lg:grid-cols-3 gap-4'>
        {HELP_PAGES.map((groupType) => (
          <div className='col my-3 md:my-0' key={uuidv4()}>
            <div className='shadow-nice p-5 bg-white'>
              <Image
                withPlaceholder
                height={200}
                src={groupType.img}
                alt={`${groupType.title}-help`}
              />
              <Anchor
                component={Link}
                to={`${groupType.url}`}
                className='mt-3 inline-block text-2xl no-underline'
              >
                {groupType.title}
              </Anchor>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Help;

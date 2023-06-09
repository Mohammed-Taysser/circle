import { Anchor, Image } from '@mantine/core';
import { BsMegaphoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import discoverImage from '../../assets/images/background/discover-groups.svg';
import yourImage from '../../assets/images/background/your-groups.svg';
import friendsImage from '../../assets/images/background/friends-groups.svg';
import recommendedImage from '../../assets/images/background/recommended-groups.svg';
import Banner from '../../common/Banner';
import { uuidv4 } from '../../helpers';
import { useDocumentTitle } from '@mantine/hooks';

const GROUPS_TYPES = [
  {
    img: discoverImage,
    title: 'Discover',
    url: 'discover',
  },
  {
    img: friendsImage,
    title: 'Friends',
    url: 'friends',
  },
  {
    img: yourImage,
    title: 'Your',
    url: 'your',
  },
  {
    img: recommendedImage,
    title: 'Recommended',
    url: 'recommended',
  },
];

function Groups() {
  useDocumentTitle('Circle | Groups');

  return (
    <>
      <Banner
        title='Groups'
        subtitle={`Search open groups`}
        icon={BsMegaphoneFill}
      />
      <div className='md:grid grid-cols-2 gap-4'>
        {GROUPS_TYPES.map((groupType) => (
          <div className='col' key={uuidv4()}>
            <div className='nice-shadow  p-5 bg-white'>
              <Image
                withPlaceholder
                height={350}
                src={groupType.img}
                alt={`${groupType.title}-groups`}
              />
              <Anchor
                component={Link}
                to={`/groups/${groupType.url}`}
                className='mt-3 inline-block text-2xl no-underline'
              >
                {groupType.title} Groups
              </Anchor>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Groups;

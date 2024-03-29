import { Anchor, Image } from '@mantine/core';
import { BsMegaphoneFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import discoverImage from '../../assets/images/background/group/discover.svg';
import friendsImage from '../../assets/images/background/group/friends.svg';
import recommendedImage from '../../assets/images/background/group/recommended.svg';
import yourImage from '../../assets/images/background/group/your.svg';
import Banner from '../../common/Banner';
import { uuidv4 } from '../../helpers';
import useHelmet from '../../hooks/useHelmet';

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
  useHelmet('groups');

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
            <div className='shadow-nice p-5 bg-white'>
              <Anchor
                component={Link}
                to={`/groups/${groupType.url}`}
                className='text-2xl hover:no-underline'
              >
                <Image
                  withPlaceholder
                  height={250}
                  mb={15}
                  src={groupType.img}
                  alt={`${groupType.title}-groups`}
                />
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

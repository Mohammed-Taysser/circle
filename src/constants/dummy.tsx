import audio from '../assets/music/skyline.mp3';
import video from '../assets/videos/video.mp4';

import avatar1 from '../assets/images/dummy/avatar/avatar-1.png';
import avatar2 from '../assets/images/dummy/avatar/avatar-2.png';
import avatar3 from '../assets/images/dummy/avatar/avatar-3.png';
import avatar4 from '../assets/images/dummy/avatar/avatar-4.png';
import avatar5 from '../assets/images/dummy/avatar/avatar-5.png';

import gallery1 from '../assets/images/dummy/gallery/gallery-1.jpg';
import gallery10 from '../assets/images/dummy/gallery/gallery-10.jpg';
import gallery2 from '../assets/images/dummy/gallery/gallery-2.jpg';
import gallery3 from '../assets/images/dummy/gallery/gallery-3.jpg';
import gallery4 from '../assets/images/dummy/gallery/gallery-4.jpg';
import gallery5 from '../assets/images/dummy/gallery/gallery-5.jpg';
import gallery6 from '../assets/images/dummy/gallery/gallery-6.jpg';
import gallery7 from '../assets/images/dummy/gallery/gallery-7.jpg';
import gallery8 from '../assets/images/dummy/gallery/gallery-8.jpg';
import gallery9 from '../assets/images/dummy/gallery/gallery-9.jpg';

import contentCreator from '../assets/images/dummy/badges/content-creator.svg';
import featured from '../assets/images/dummy/badges/featured.svg';
import happy from '../assets/images/dummy/badges/happy.svg';
import hotHunter from '../assets/images/dummy/badges/hot-hunter.svg';
import king from '../assets/images/dummy/badges/king.svg';
import rocket from '../assets/images/dummy/badges/rocket.svg';
import spring from '../assets/images/dummy/badges/spring.svg';
import target from '../assets/images/dummy/badges/target.svg';
import trending from '../assets/images/dummy/badges/trending.svg';
import universe from '../assets/images/dummy/badges/universe.svg';
import { EventInput } from '@fullcalendar/core';

const POSTS: Post[] = [
  {
    id: '10',
    variant: 'youtube',
    visibility: 'public',
    assets: {
      embedded: 'https://www.youtube.com/embed/MSq_DCRxOxw',
    },
    user: {
      avatar: avatar4,
      name: 'Mohammed Taysser',
      id: '101',
      isVerified: false,
    },
    publishAt: new Date('2021'),
    editAt: new Date('2021'),
    isSaved: true,
    body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
    share: {
      count: 1,
    },
    comments: {
      count: 0,
    },
    reacts: {
      count: 0,
      labels: [],
    },
  },
  {
    id: '7',
    variant: 'avatar',
    visibility: 'public',
    assets: {
      avatar: avatar5,
    },
    user: {
      avatar: avatar4,
      name: 'Mohammed Taysser',
      id: '101',
      isVerified: false,
    },
    publishAt: new Date('2021'),
    editAt: new Date('2021'),
    isSaved: true,
    body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
    share: {
      count: 1,
    },
    comments: {
      count: 0,
    },
    reacts: {
      count: 0,
      labels: [],
    },
  },
  {
    id: '8',
    variant: 'cover',
    visibility: 'friends',
    assets: {
      cover: gallery6,
    },
    user: {
      avatar: avatar3,
      name: 'Amy Horsefighter',
      id: '101',
      isVerified: true,
    },
    publishAt: new Date(),
    isSaved: false,
    body: `<div style="font-family: 'Tajawal', sans-serif;text-align: right"> هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. <br/>ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.</div>`,
    share: {
      count: 10,
    },
    comments: {
      count: 110,
    },
    reacts: {
      count: 101,
      labels: ['star', 'like'],
      react: 'star',
    },
  },
  {
    id: '1',
    variant: 'blog',
    visibility: 'friends',
    assets: {},
    user: {
      avatar: avatar3,
      name: 'Amy Horsefighter',
      id: '101',
      isVerified: true,
    },
    publishAt: new Date(),
    isSaved: false,
    body: `<div style="font-family: 'Tajawal', sans-serif;text-align: right"> هناك حقيقة مثبتة منذ زمن طويل وهي أن المحتوى المقروء لصفحة ما سيلهي القارئ عن التركيز على الشكل الخارجي للنص أو شكل توضع الفقرات في الصفحة التي يقرأها. <br/>ولذلك يتم استخدام طريقة لوريم إيبسوم لأنها تعطي توزيعاَ طبيعياَ -إلى حد ما- للأحرف عوضاً عن استخدام "هنا يوجد محتوى نصي، هنا يوجد محتوى نصي" فتجعلها تبدو (أي الأحرف) وكأنها نص مقروء. العديد من برامح النشر المكتبي وبرامح تحرير صفحات الويب تستخدم لوريم إيبسوم بشكل إفتراضي كنموذج عن النص، وإذا قمت بإدخال "lorem ipsum" في أي محرك بحث ستظهر العديد من المواقع الحديثة العهد في نتائج البحث. على مدى السنين ظهرت نسخ جديدة ومختلفة من نص لوريم إيبسوم، أحياناً عن طريق الصدفة، وأحياناً عن عمد كإدخال بعض العبارات الفكاهية إليها.</div>`,
    share: {
      count: 10,
    },
    comments: {
      count: 110,
    },
    reacts: {
      count: 101,
      labels: ['star', 'like'],
      react: 'star',
    },
  },
  {
    id: '2',
    variant: 'blog',
    visibility: 'public',
    assets: {},
    user: {
      avatar: avatar1,
      name: 'Aurora Light',
      id: '101',
      isVerified: false,
    },
    publishAt: new Date('2022'),
    isSaved: false,
    body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
    share: {
      count: 10,
    },
    comments: {
      count: 106,
    },
    reacts: {
      count: 0,
      labels: [],
    },
  },
  {
    id: '3',
    variant: 'gallery',
    visibility: 'private',
    assets: {
      gallery: [gallery1, gallery10, gallery2, gallery3],
    },
    user: {
      avatar: avatar1,
      name: 'Aalaa',
      id: '101',
      isVerified: false,
    },
    publishAt: new Date('2021'),
    isSaved: true,
    body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
    share: {
      count: 1,
    },
    comments: {
      count: 0,
    },
    reacts: {
      count: 0,
      labels: [],
    },
  },
  {
    id: '4',
    variant: 'audio',
    visibility: 'private',
    assets: {
      audio,
    },
    user: {
      avatar: avatar1,
      name: 'Aalaa',
      id: '101',
      isVerified: false,
    },
    publishAt: new Date('2021'),
    isSaved: false,
    body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
    share: {
      count: 1,
    },
    comments: {
      count: 0,
    },
    reacts: {
      count: 0,
      labels: [],
    },
  },
  {
    id: '5',
    variant: 'video',
    visibility: 'private',
    assets: {
      video: video,
    },
    user: {
      avatar: avatar4,
      name: 'Mohammed Taysser',
      id: '101',
      isVerified: false,
    },
    publishAt: new Date('2021'),
    isSaved: true,
    body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
    share: {
      count: 1,
    },
    comments: {
      count: 0,
    },
    reacts: {
      count: 0,
      labels: [],
    },
  },
  {
    id: '6',
    variant: 'share',
    visibility: 'private',
    assets: {},
    user: {
      avatar: avatar1,
      name: 'Aalaa',
      id: '101',
      isVerified: false,
    },
    publishAt: new Date('2021'),
    isSaved: false,
    body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
    share: {
      count: 1,
      origin: {
        id: '3',
        variant: 'gallery',
        visibility: 'private',
        assets: {
          gallery: [gallery1, gallery10, gallery2, gallery3],
        },
        user: {
          avatar: avatar1,
          name: 'Aalaa',
          id: '101',
          isVerified: false,
        },
        publishAt: new Date('2021'),
        isSaved: true,
        body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
        share: {
          count: 1,
        },
        comments: {
          count: 0,
        },
        reacts: {
          count: 0,
          labels: [],
        },
      },
    },
    comments: {
      count: 0,
    },
    reacts: {
      count: 0,
      labels: [],
    },
  },
];

const POST_REACTS = {
  star: [
    {
      id: '1',
      avatar: avatar2,
      username: 'mohammed-taysser',
      fullName: 'Mohammed Taysser',
      date: '2 yearn ago',
    },
    {
      id: '10',
      avatar: avatar3,
      username: 'mohammed',
      fullName: 'Mohammed',
      date: '2 yearn ago',
    },
  ],
  wow: [
    {
      id: '1',
      avatar: avatar4,
      username: 'mohammed-taysser',
      fullName: 'Mohammed Taysser',
      date: '2 yearn ago',
    },
    {
      id: '10',
      avatar: avatar5,
      username: 'mohammed',
      fullName: 'Mohammed',
      date: '2 yearn ago',
    },
  ],
};

const COMMENTS: PostComment[] = [
  {
    id: '123gf4dd5gdfdfdfggggg645dfdf45ffgghfffgdfgg6',
    user: {
      avatar: avatar2,
      name: 'Mohammed',
      id: '10v1',
    },
    body: 'Amazing avatar 😁',
    publishAt: new Date(),
  },
  {
    id: '123gf4dd5ghipgdfdfdfggggg645dfdf45fffffgdfgg6',
    user: {
      avatar: avatar3,
      name: 'Amy Horsefighter',
      id: '10vv1',
    },
    body: 'kiss me la la lal',
    publishAt: new Date(),
  },
];

const GROUPS: Group[] = [
  {
    id: '10f',
    visibility: 'public',
    title: 'Developer Geeks',
    users: 147,
    picture: gallery7,
    cover: gallery3,
    posts: 1092,
  },
  {
    id: '1',
    visibility: 'private',
    title: 'Sky fall',
    users: 45621,
    picture: gallery1,
    cover: gallery6,
    posts: 456,
  },
  {
    id: '10',
    visibility: 'public',
    title: 'Transformers',
    users: 4562,
    picture: gallery3,
    cover: gallery10,
    posts: 102,
  },
];

const BADGES: Badge[] = [
  {
    id: '1',
    label: 'Happy Rock',
    picture: happy,
    msg: 'If user earned 70 points credit then unlocked this badge.',
    users: [
      {
        avatar: gallery5,
        name: 'Mohammed',
        id: '101',
      },
      {
        avatar: gallery8,
        name: 'Aurora',
        id: '1001',
      },
      {
        avatar: avatar3,
        name: 'Dr strange',
        id: '1h01',
      },
      {
        avatar: avatar4,
        name: 'Dr stone',
        id: '10h01',
      },
      {
        avatar: avatar5,
        name: 'Dr home',
        id: '10ggg1',
      },
      {
        avatar: gallery5,
        name: 'Dr dev',
        id: '100gggg1',
      },
    ],
    earnedAt: new Date('2010'),
  },
  {
    id: '2',
    label: 'Target',
    picture: target,
    msg: 'If user earned 120 points credit then unlocked this badge.',
    users: [
      {
        avatar: gallery5,
        name: 'Mohammed',
        id: '101',
      },
      {
        avatar: gallery8,
        name: 'Aurora',
        id: '1001',
      },
      {
        avatar: avatar3,
        name: 'Dr strange',
        id: '1h01',
      },
      {
        avatar: avatar4,
        name: 'Dr stone',
        id: '10h01',
      },
      {
        avatar: avatar5,
        name: 'Dr home',
        id: '10ggg1',
      },
      {
        avatar: gallery5,
        name: 'Dr dev',
        id: '100gggg1',
      },
    ],
    earnedAt: new Date('2010'),
  },
  {
    id: '3',
    label: 'Featured',
    picture: featured,
    msg: 'If user earned 130 points credit then unlocked this badge.',
    users: [
      {
        avatar: gallery5,
        name: 'Mohammed',
        id: '101',
      },
      {
        avatar: gallery8,
        name: 'Aurora',
        id: '1001',
      },
      {
        avatar: avatar3,
        name: 'Dr strange',
        id: '1h01',
      },
      {
        avatar: avatar4,
        name: 'Dr stone',
        id: '10h01',
      },
      {
        avatar: avatar5,
        name: 'Dr home',
        id: '10ggg1',
      },
      {
        avatar: gallery5,
        name: 'Dr dev',
        id: '100gggg1',
      },
    ],
    earnedAt: new Date('2010'),
  },
  {
    id: '4',
    label: 'Spring',
    picture: spring,
    msg: 'If user earned 140 points credit then unlocked this badge.',
    users: [
      {
        avatar: gallery5,
        name: 'Mohammed',
        id: '101',
      },
      {
        avatar: gallery8,
        name: 'Aurora',
        id: '1001',
      },
      {
        avatar: avatar3,
        name: 'Dr strange',
        id: '1h01',
      },
      {
        avatar: avatar4,
        name: 'Dr stone',
        id: '10h01',
      },
      {
        avatar: avatar5,
        name: 'Dr home',
        id: '10ggg1',
      },
      {
        avatar: gallery5,
        name: 'Dr dev',
        id: '100gggg1',
      },
    ],
    earnedAt: new Date('2013'),
  },
  {
    id: '5',
    label: 'Rocket',
    picture: rocket,
    msg: 'If user earned 100 points credit then unlocked this badge.',
    users: [
      {
        avatar: gallery5,
        name: 'Mohammed',
        id: '101',
      },
      {
        avatar: gallery8,
        name: 'Aurora',
        id: '1001',
      },
      {
        avatar: avatar3,
        name: 'Dr strange',
        id: '1h01',
      },
      {
        avatar: avatar4,
        name: 'Dr stone',
        id: '10h01',
      },
      {
        avatar: avatar5,
        name: 'Dr home',
        id: '10ggg1',
      },
      {
        avatar: gallery5,
        name: 'Dr dev',
        id: '100gggg1',
      },
    ],
    earnedAt: new Date('2013'),
  },
  {
    id: '6',
    label: 'Content Creator',
    picture: contentCreator,
    msg: 'If user earned 50 points credit then unlocked this badge.',
    users: [
      {
        avatar: gallery5,
        name: 'Mohammed',
        id: '101',
      },
      {
        avatar: gallery8,
        name: 'Aurora',
        id: '1001',
      },
      {
        avatar: avatar3,
        name: 'Dr strange',
        id: '1h01',
      },
      {
        avatar: avatar4,
        name: 'Dr stone',
        id: '10h01',
      },
      {
        avatar: avatar5,
        name: 'Dr home',
        id: '10ggg1',
      },
      {
        avatar: gallery5,
        name: 'Dr dev',
        id: '100gggg1',
      },
    ],
    earnedAt: new Date('2013'),
  },
  {
    id: '7',
    label: 'Trending',
    picture: trending,
    msg: 'If user earned 150 points credit then unlocked this badge.',
    users: [
      {
        avatar: gallery5,
        name: 'Mohammed',
        id: '101',
      },
      {
        avatar: gallery8,
        name: 'Aurora',
        id: '1001',
      },
      {
        avatar: avatar3,
        name: 'Dr strange',
        id: '1h01',
      },
      {
        avatar: avatar4,
        name: 'Dr stone',
        id: '10h01',
      },
      {
        avatar: avatar5,
        name: 'Dr home',
        id: '10ggg1',
      },
      {
        avatar: gallery5,
        name: 'Dr dev',
        id: '100gggg1',
      },
    ],
    earnedAt: new Date('2013'),
  },
  {
    id: '8',
    label: 'Hot Hunter',
    picture: hotHunter,
    msg: 'If user earned 160 points credit then unlocked this badge.',
    users: [
      {
        avatar: gallery5,
        name: 'Mohammed',
        id: '101',
      },
      {
        avatar: gallery8,
        name: 'Aurora',
        id: '1001',
      },
      {
        avatar: avatar3,
        name: 'Dr strange',
        id: '1h01',
      },
      {
        avatar: avatar4,
        name: 'Dr stone',
        id: '10h01',
      },
      {
        avatar: avatar5,
        name: 'Dr home',
        id: '10ggg1',
      },
      {
        avatar: gallery5,
        name: 'Dr dev',
        id: '100gggg1',
      },
    ],
    earnedAt: new Date('2013'),
  },
  {
    id: '9',
    label: 'Universe',
    picture: universe,
    msg: 'If user earned 180 points credit then unlocked this badge.',
    users: [
      {
        avatar: gallery5,
        name: 'Mohammed',
        id: '101',
      },
      {
        avatar: gallery8,
        name: 'Aurora',
        id: '1001',
      },
      {
        avatar: avatar3,
        name: 'Dr strange',
        id: '1h01',
      },
      {
        avatar: avatar4,
        name: 'Dr stone',
        id: '10h01',
      },
      {
        avatar: avatar5,
        name: 'Dr home',
        id: '10ggg1',
      },
      {
        avatar: gallery5,
        name: 'Dr dev',
        id: '100gggg1',
      },
    ],
    earnedAt: new Date('2013'),
  },
  {
    id: '10',
    label: 'King',
    picture: king,
    msg: 'If user earned 250 points credit then unlocked this badge.',
    users: [
      {
        avatar: gallery5,
        name: 'Mohammed',
        id: '101',
      },
      {
        avatar: gallery8,
        name: 'Aurora',
        id: '1001',
      },
      {
        avatar: avatar3,
        name: 'Dr strange',
        id: '1h01',
      },
      {
        avatar: avatar4,
        name: 'Dr stone',
        id: '10h01',
      },
      {
        avatar: avatar5,
        name: 'Dr home',
        id: '10ggg1',
      },
      {
        avatar: gallery5,
        name: 'Dr dev',
        id: '100gggg1',
      },
    ],
    earnedAt: new Date('2013'),
  },
];

const FRIENDS: User[] = [
  {
    avatar: avatar1,
    cover: gallery5,
    name: 'Mohammed',
    username: 'Mohammed',
    joinAt: new Date('2010'),
    id: '101',
    badges: [
      {
        id: '3',
        label: 'Spring',
        picture: spring,
      },
      { id: '3', label: 'Featured', picture: featured },
    ],
  },
  {
    avatar: avatar4,
    cover: gallery9,
    name: 'Aurora',
    username: 'au101',
    joinAt: new Date('2020'),
    id: '101d',
    badges: [
      { id: '2', label: 'Target', picture: target },
      { id: '3', label: 'Featured', picture: featured },
      { id: '1', label: 'Happy Rock', picture: happy },
    ],
  },
];

const EVENTS = [
  {
    id: '1',
    title: 'Breakfast at the Agency',
    date: new Date(),
    info: 'Hi Guys! I propose to go a little earlier at the agency to have breakfast and talk a little more about the new design project we have been working on. Cheers!',
  },
  {
    id: '2',
    title: "Let's hack the world",
    date: new Date(),
    info: 'Hi Guys!',
  },
  {
    id: '3',
    title: 'love aurora',
    date: new Date(),
    info: 'Hi Guys!',
  },
];

let todayStr = new Date().toISOString().replace(/T.*$/, '');

const INITIAL_EVENTS: EventInput[] = [
  {
    id: '1',
    title: 'All-day event',
    start: todayStr,
    timeText: '12p',
    allDay: true,
  },
  {
    id: '2',
    title: 'All-day event',
    start: todayStr,
    timeText: '12p',
    allDay: true,
  },
  {
    title: 'event1',
    start: todayStr,
    id: '3',
  },
  {
    id: '4',
    title: 'event2',
    start: todayStr,
    allDay: false,
    end: '2023-05-07',
  },
  {
    id: '5',
    title: 'event3',
    start: '2023-05-26T12:30:00',
    allDay: false, // will make the time show
  },
];

export {
  POSTS,
  POST_REACTS,
  COMMENTS,
  GROUPS,
  BADGES,
  FRIENDS,
  EVENTS,
  INITIAL_EVENTS,
};

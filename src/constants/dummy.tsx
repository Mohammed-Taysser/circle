import audio from '../assets/music/skyline.mp3';
import video from '../assets/videos/video.mp4';

import avatar1 from '../assets/images/dummy/avatar/avatar-1.png';
import avatar2 from '../assets/images/dummy/avatar/avatar-2.png';
import avatar3 from '../assets/images/dummy/avatar/avatar-3.png';
import avatar4 from '../assets/images/dummy/avatar/avatar-4.png';
import avatar5 from '../assets/images/dummy/avatar/avatar-5.png';

const avatar6 = `https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/6/60af4d634213d-bpthumb.jpg`;
const avatar7 = `https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/9/60af608a96b75-bpthumb.jpg`;
const avatar8 = `https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/4/60af46c0ca779-bpthumb.jpg`;
const avatar9 = `https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/19/60af144802575-bpthumb.jpg`;
const avatar10 = `https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/24/60951ab25182e-bpthumb.jpg`;
const avatar11 = `https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/3/60af2df0249b6-bpthumb.jpg`;
const avatar12 = `https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/2/60af4e585dccc-bpthumb.jpg`;
const avatar13 = `https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/1/60af1abf04a6b-bpthumb.jpg`;

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
    id: '8f0e6090-e841-495d-8bad-d75f885368ec',
    variant: 'youtube',
    visibility: 'public',
    assets: {
      embedded: 'https://www.youtube.com/embed/MSq_DCRxOxw',
    },
    user: {
      avatar: avatar13,
      name: 'Aurora Light',
      id: '50fb3aa7-d6c9-4765-afc3-026751d2161a',
      isVerified: false,
    },
    publishAt: new Date('2021-12-15T19:16:03Z'),
    editAt: new Date('2021-01-07T05:58:06Z'),
    isSaved: false,
    body: 'React is really popular when creating frontend components and when the scale of your application is increased, we need to have robust tests to cover all scenarios. The unit testing component becomes a great way to ensure the quality of the application and easily find bugs in the build time when the tests are written well. In this post, we will learn how to test a component with React and Vitest',
    share: {
      count: 41,
    },
    comments: {
      count: 79,
    },
    reacts: {
      count: 75314,
      labels: ['like', 'love'],
      react: 'like',
    },
  },
  {
    id: 'c6511f71-194a-4ed3-b486-64a8634d47ee',
    variant: 'avatar',
    visibility: 'public',
    assets: {
      avatar: avatar12,
    },
    user: {
      avatar: avatar12,
      name: 'Cheryl Jesteco',
      id: '5e73cbd1-a226-4e85-8656-8574f4d10b6e',
      isVerified: false,
    },
    publishAt: new Date('2022-12-11T05:44:28Z'),
    isSaved: true,
    body: 'One of the advantages of Vitest is that it uses the same config as Vite. This ensures that the test environment is the same as the build environment which increases the reliability of the tests',
    share: {
      count: 751,
    },
    comments: {
      count: 1462,
    },
    reacts: {
      count: 7524401,
      labels: ['wow', 'star', 'love'],
      react: 'wow',
    },
  },
  {
    id: '4b883cee-b467-47fd-98e3-8def174cef30',
    variant: 'cover',
    visibility: 'friends',
    assets: {
      cover: gallery4,
    },
    user: {
      avatar: avatar11,
      name: 'Jacquenette Stede',
      id: '34586b09-8caa-4ad9-b685-fc73d06e23f0',
      isVerified: true,
    },
    publishAt: new Date('2020-12-26T19:45:30Z'),
    isSaved: false,
    body: `<div style="font-family: 'Tajawal', sans-serif;text-align: right">تقدم GPT-4 دعمًا متقدمًا للغة العربية، حيث يمكنها التعامل مع النصوص العربية بكفاءة عالية. تتميز بقدرتها على فهم النصوص وتحليلها وتوليد نصوص جديدة باللغة العربية بطلاقة. بالإضافة إلى ذلك، يمكن لـ GPT-4 تقديم توجيهات باللغة العربية بدقة ووضوح.

    للبدء في استخدام GPT-4، يمكنك إدخال النص العربي الذي ترغب في تحليله أو توليده. ستقوم GPT-4 بتحليل النص وتقديم النتائج المطلوبة. يمكنك أيضًا توجيه GPT-4 لتقديم توجيهات باللغة العربية، حيث ستقوم بتقديم التوجيهات بطريقة واضحة ومفهومة.
    
    تعتبر GPT-4 خطوة كبيرة في تطور الذكاء الصناعي، حيث توفر دعمًا متقدمًا للغات متعددة بما في ذلك اللغة العربية.</div>`,
    share: {
      count: 1075,
    },
    comments: {
      count: 110120,
    },
    reacts: {
      count: 1013,
      labels: ['star'],
      react: 'love',
    },
  },
  {
    id: 'a8cde747-b8bd-4e3a-b512-329ec8f52a90',
    variant: 'blog',
    visibility: 'friends',
    assets: {},
    user: {
      avatar: avatar10,
      name: 'Debbie Bussel',
      id: '75633f44-c246-4400-ae2b-f460a3840a4a',
      isVerified: true,
    },
    publishAt: new Date('2021-09-25T20:27:11Z'),
    isSaved: false,
    body: `<div style="font-family: 'Tajawal', sans-serif;text-align: right"> البرمجة باللغة العربية تعتبر تحديًا بحد ذاته، ولكن مع التطور التكنولوجي الحديث، أصبحت هناك أدوات ومنصات تدعم البرمجة باللغة العربية. تتيح هذه الأدوات للمطورين الذين يتحدثون العربية كتابة الأكواد وتنفيذها باللغة العربية.

    من الجدير بالذكر أن البرمجة باللغة العربية ليست محدودة فقط على الأكواد، بل يمكن أيضًا تطبيقها على التعليمات البرمجية والتعليقات والوثائق. هذا يساعد في تسهيل فهم الأكواد وتطويرها للمطورين الذين يتحدثون العربية.
    
    ومع ذلك، يجب أن نلاحظ أن الغالبية العظمى من لغات البرمجة مكتوبة باللغة الإنجليزية، ولذلك قد يكون من الضروري للمطورين الذين يتحدثون العربية تعلم الإنجليزية للتمكن من التعامل مع معظم الأدوات والمكتبات البرمجية.
    
    في النهاية، البرمجة باللغة العربية هي خطوة مهمة نحو تعزيز الشمولية في مجال التكنولوجيا وتمكين المزيد من الأشخاص من المشاركة في هذا المجال.
    </div>`,
    share: {
      count: 7510,
    },
    comments: {
      count: 1107,
    },
    reacts: {
      count: 56101,
      labels: ['star'],
    },
  },
  {
    id: '4383a127-1add-453c-8ac1-1c0799313819',
    variant: 'gallery',
    visibility: 'private',
    assets: {
      gallery: [gallery1, gallery10, gallery2, gallery3],
    },
    user: {
      avatar: avatar9,
      name: 'Garrek De Bruyn',
      id: '23c0e3bd-8567-444b-9b74-687c8e3c11ca',
      isVerified: false,
    },
    publishAt: new Date('2023-07-03T12:08:30Z'),
    isSaved: true,
    body: `The next step for this would be to start adding more tests, and potentially work towards route changes with react-router-dom. I am going to be working on a more detailed article to cover Metamask unit tests with Jest and then also cover E2E tests with Cypress. That is coming, but as you can imagine, writing tests for tests and explaining tests can take some time.

If you got value from this, please also follow me on twitter (where I'm quite active) @codingwithmanny and instagram at @codingwithmanny.
    
You can also find me on the Developer DAO Discord as codingwithmanny :)`,
    share: {
      count: 9641,
    },
    comments: {
      count: 4175,
    },
    reacts: {
      count: 94684,
      labels: ['wow', 'star'],
    },
  },
  {
    id: 'b819d945-7d01-4bf8-b5f9-ee666faa7ae9',
    variant: 'audio',
    visibility: 'private',
    assets: {
      audio,
    },
    user: {
      avatar: avatar8,
      name: 'Jason Chaffetz',
      id: 'eb4e16cf-070d-46a5-977d-1edef0d9a94d',
      isVerified: false,
    },
    publishAt: new Date('2022-04-30T08:05:00Z'),
    isSaved: false,
    body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
    share: {
      count: 1421,
    },
    comments: {
      count: 753421,
    },
    reacts: {
      count: 1596472,
      labels: ['like', 'wow', 'love', 'star'],
    },
  },
  {
    id: '16747b36-5e71-46dd-a72c-09efe14aa185',
    variant: 'video',
    visibility: 'private',
    assets: {
      video,
    },
    user: {
      avatar: avatar7,
      name: 'Monta Ellis',
      id: '1ea4a473-d1f5-4381-b3ac-71e5ad00e777',
      isVerified: false,
    },
    publishAt: new Date('2021'),
    isSaved: true,
    body: "Now that we have our tests fully working, we might want our test scenarios to be a bit clearer, but creating an element that only appears when the count is greater than 0. We could just identify this by querying the DOM if an element is null, but we're going to extend things to be clearer using @testing-library/jest-dom. The only issue with this module is that we would need to import it with every test we make, so instead we're going to import it for all our tests using jest.setup.ts.",
    share: {
      count: 146512,
    },
    comments: {
      count: 75241,
    },
    reacts: {
      count: 7518942,
      labels: ['wow', 'like', 'love'],
      react: 'like',
    },
  },
  {
    id: 'eaf888fe-56ff-45de-8a3e-b1feea028cf2',
    variant: 'share',
    visibility: 'public',
    assets: {},
    user: {
      avatar: avatar6,
      name: 'Matraca Berg',
      id: '00712634-4926-4d54-8cc8-5df42ebe1474',
      isVerified: false,
    },
    publishAt: new Date(),
    isSaved: false,
    body: `<div><p>When writing applications, testing is crucial for ensuring code behaves as expected. In this guide, you'll learn how to get started quickly writing tests using TypeScript, React, and Jest in an idiomatic way.</p><p>There are several benefits to leveraging TypeScript when testing:</p><ul><li><p>Enables better refactoring of tests, improving long-term maintenance</p></li><li><p>Ensures consistency of component usage and props</p></li><li><p>Reduces potential for bugs within tests</p></li></ul></div>`,
    share: {
      count: 1,
      origin: {
        id: '4383a127-1add-453c-8ac1-1c0799313819',
        variant: 'gallery',
        visibility: 'private',
        assets: {
          gallery: [gallery1, gallery10, gallery2, gallery3],
        },
        user: {
          avatar:
            'https://www.radiustheme.com/demo/wordpress/themes/cirkle/wp-content/uploads/avatars/19/60af144802575-bpthumb.jpg',
          name: 'Garrek De Bruyn',
          id: '23c0e3bd-8567-444b-9b74-687c8e3c11ca',
          isVerified: false,
        },
        publishAt: new Date('2023-07-03T12:08:30Z'),
        isSaved: true,
        body: `The next step for this would be to start adding more tests, and potentially work towards route changes with react-router-dom. I am going to be working on a more detailed article to cover Metamask unit tests with Jest and then also cover E2E tests with Cypress. That is coming, but as you can imagine, writing tests for tests and explaining tests can take some time.
    
If you got value from this, please also follow me on twitter (where I'm quite active) @codingwithmanny and instagram at @codingwithmanny.
        
You can also find me on the Developer DAO Discord as codingwithmanny :)`,
        share: {
          count: 9641,
        },
        comments: {
          count: 4175,
        },
        reacts: {
          count: 94684,
          labels: ['wow', 'star'],
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
      id: 'be73243a-8e5f-47f8-bf21-5499edc8f8e0',
      avatar: avatar1,
      username: 'gtuting0',
      fullName: 'Warner Dicte',
      date: '2022-02-06T12:08:53Z',
    },
    {
      id: 'ddfbf092-d391-4c38-9dd7-6f1a2ee5d7f8',
      avatar: avatar10,
      username: 'smote0',
      fullName: 'Arleyne Espada',
      date: '2022-01-10T21:35:38Z',
    },
    {
      id: 'c391afd0-4d08-4aab-b219-3e0d9d324c68',
      avatar: avatar11,
      username: 'hnoteyoung0',
      fullName: 'Jean Itzhayek',
      date: '2022-11-02T01:32:33Z',
    },
    {
      id: '39d81c15-5fcd-46df-b8e3-3774eed40465',
      avatar: avatar12,
      username: 'aheinrich0',
      fullName: 'Roxane McIntee',
      date: '2022-09-02T12:37:03Z',
    },
  ],
  wow: [
    {
      id: '1b295d7e-6e18-4cf7-9830-8838ec0fdc89',
      avatar: avatar13,
      username: 'callflatt1',
      fullName: 'Germain Leppingwell',
      date: '2022-11-12T15:11:48Z',
    },
    {
      id: '9350436d-ca5c-4a52-a615-1fdeb872beae',
      avatar: avatar2,
      username: 'mbascomb1',
      fullName: 'Eliot Manuello',
      date: '2022-05-23T11:19:55Z',
    },
    {
      id: 'fd340fa2-93c9-4168-9e02-ecec9c049eb9',
      avatar: avatar3,
      username: 'hsandyford1',
      fullName: 'Lynnette Swindlehurst',
      date: '2022-05-13T18:46:54Z',
    },
    {
      id: '32013191-51a5-4074-b23f-933046623258',
      avatar: avatar4,
      username: 'pbamford1',
      fullName: 'Hartwell Faraker',
      date: '2022-10-23T10:01:36Z',
    },
  ],
  like: [
    {
      id: 'f1af00dd-faf3-4c7d-8e6c-e37f8027523e',
      avatar: avatar5,
      username: 'mbanting2',
      fullName: 'Sigvard Pavlasek',
      date: '2022-06-08T22:59:11Z',
    },
    {
      id: '3b9d6fb0-f8e6-4da2-b38e-fb8671c7250e',
      avatar: avatar6,
      username: 'athacke2',
      fullName: 'Adair Gobeau',
      date: '2022-08-31T13:16:56Z',
    },
    {
      id: 'adf7ce0f-98c0-470f-ae71-9324d9c98fba',
      avatar: avatar7,
      username: 'emilan2',
      fullName: 'Sharona Dryburgh',
      date: '2022-02-07T05:00:48Z',
    },
    {
      id: '1a103515-d93a-4fbf-81af-0bf10aa04dc9',
      avatar: avatar8,
      username: 'cjiruch2',
      fullName: 'Albie Orht',
      date: '2022-01-16T11:31:18Z',
    },
  ],

  love: [
    {
      id: '661fb1f9-6854-4742-b45e-857620a0f0a6',
      avatar: avatar9,
      username: 'bjenson3',
      fullName: 'Evangeline Riveles',
      date: '2022-10-28T15:26:51Z',
    },
    {
      id: '47c9f776-cfee-482b-8bb4-4da93c1a3e9d',
      avatar: avatar1,
      username: 'blassetter3',
      fullName: 'Nerissa Svanini',
      date: '2022-08-21T11:06:11Z',
    },
    {
      id: '9e28819b-f25f-441a-9ba9-6be9df37f0b8',
      avatar: avatar2,
      username: 'fhaseldine3',
      fullName: 'Rafael Gallety',
      date: '2022-11-27T23:09:12Z',
    },
    {
      id: '3feb0e01-da59-4b30-ba6c-3fe7a52e2ed8',
      avatar: avatar3,
      username: 'hkelinge3',
      fullName: 'Tory Shearer',
      date: '2022-09-01T17:22:58Z',
    },
  ],
};

const POST_COMMENTS = [
  {
    id: '720cef3d-30a2-49d8-be94-34d841d73632',
    user: {
      avatar: avatar6,
      name: 'Flossy',
      id: 'b186cf9f-182e-48a8-a5bd-abc184280921',
    },
    publishAt: '2023-06-11T07:55:05Z',
    body: 'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.\n\nEtiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem.',
  },
  {
    id: 'b7834f39-8920-4fab-8606-710d803a7edb',
    user: {
      avatar: avatar7,
      name: 'Marcela',
      id: '7e04235b-140d-4cdd-9524-9c51436602ec',
    },
    publishAt: '2023-06-22T06:11:07Z',
    body: 'Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.',
  },
  {
    id: '19a1c564-2ffd-43ed-9cbb-7745c36b728a',
    user: {
      avatar: avatar8,
      name: 'Aile',
      id: '31906f70-2015-4397-91b3-81db0dbb9c62',
    },
    publishAt: '2023-07-24T05:16:43Z',
    body: 'Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat.\n\nPraesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.',
  },
  {
    id: 'c2ecbd74-7374-4761-b2fe-807c23950c69',
    user: {
      avatar: avatar8,
      name: 'Lars',
      id: '39464ce5-843b-4ed9-9ac5-3a68b024af50',
    },
    publishAt: '2023-06-19T17:28:31Z',
    body: 'Proin leo odio, porttitor id, consequat in, consequat ut, nulla. Sed accumsan felis. Ut at dolor quis odio consequat varius.\n\nInteger ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.',
  },
  {
    id: 'c29c2a92-f88b-4cf2-8078-8330bf51b76d',
    user: {
      avatar: avatar9,
      name: 'Trudy',
      id: '16793a12-874a-4425-b381-50c7a4ef78a2',
    },
    publishAt: '2023-06-20T00:16:46Z',
    body: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.\n\nCurabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
  },
  {
    id: 'c6c55278-45f8-44ef-b404-e41efe201eb9',
    user: {
      avatar: avatar10,
      name: 'Anastasie',
      id: 'faff57a2-bb25-4dc8-904a-48bbeb3180b4',
    },
    publishAt: '2023-08-15T21:48:06Z',
    body: 'Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.\n\nNullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh.\n\nIn quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet.',
  },
  {
    id: 'be911afc-15ed-4075-9fbf-d01aab14fa19',
    user: {
      avatar: avatar11,
      name: 'Flss',
      id: '43c89b97-63eb-4dbe-95cc-9dcb53275fed',
    },
    publishAt: '2023-08-05T10:39:11Z',
    body: 'Integer ac leo. Pellentesque ultrices mattis odio. Donec vitae nisi.\n\nNam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus. Nulla suscipit ligula in lacus.\n\nCurabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.',
  },
  {
    id: '4a1af446-55b9-45de-bb71-77127ed3e3f3',
    user: {
      avatar: avatar3,
      name: 'Erhard',
      id: '0bb7c522-71a5-43ab-a54b-69db35fee6d9',
    },
    publishAt: '2023-07-17T10:34:53Z',
    body: 'Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.',
  },
  {
    id: 'a792b54f-f496-4f72-bdf9-36d8d860c600',
    user: {
      avatar: avatar2,
      name: 'Rozanna',
      id: 'eaa09249-ecdb-48a6-a88f-b10f369c6758',
    },
    publishAt: '2023-08-13T19:32:37Z',
    body: 'Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.\n\nFusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem.\n\nSed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus.',
  },
  {
    id: '2c84f26b-bd8a-4551-8e91-dfef4c6f7f39',
    user: {
      avatar: avatar5,
      name: 'Eloise',
      id: 'f3495786-9469-4448-a20b-354cdbd84c24',
    },
    publishAt: '2023-08-12T15:14:14Z',
    body: 'Aenean lectus. Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum.',
  },
];

const NOTIFICATION: SingleNotification[] = [
  {
    type: 'share',
    unread: true,
    date: new Date(),
    post: {
      id: '12',
    },
    id: '1',
    user: {
      name: 'Mohammed Taysser',
      avatar: avatar7,
      id: '1',
    },
    msg: '4 Friends in Common',
  },
  {
    type: 'request',
    unread: false,
    date: new Date(),
    post: {
      id: '12',
    },
    id: '2',
    user: {
      name: 'Tony Stevens',
      avatar: avatar6,
      id: '1',
    },
    msg: '4 Friends in Common',
  },
  {
    type: 'comment',
    unread: true,
    date: new Date(),
    post: {
      id: '12',
    },
    id: '3',
    user: {
      name: 'Tamara Romanoff',
      avatar: avatar8,
      id: '1',
    },
  },
  {
    type: 'comment',
    unread: true,
    date: new Date(),
    post: {
      id: '12',
    },
    id: '4',
    user: {
      name: 'Mary Jane Stark',
      avatar: avatar9,
      id: '1',
    },
    msg: '4 Friends in Common',
  },
  {
    type: 'request',
    unread: false,
    date: new Date(),
    post: {
      id: '12',
    },
    id: '5',
    user: {
      name: 'Stagg Clothing',
      avatar: avatar10,
      id: '1',
    },
  },
  {
    type: 'share',
    unread: true,
    date: new Date(),
    post: {
      id: '12',
    },
    id: '6',
    user: {
      name: 'Jake Parker',
      avatar: avatar11,
      id: '1',
    },
  },
  {
    type: 'share',
    unread: false,
    date: new Date(),
    post: {
      id: '12',
    },
    id: '7',
    user: {
      name: 'Elaine Dreyfuss',
      avatar: avatar5,
      id: '1',
    },
    msg: '4 Friends in Common',
  },
  {
    type: 'replay',
    unread: true,
    date: new Date(),
    post: {
      id: '12',
    },
    id: '8',
    user: {
      name: 'Aalaa Kamal',
      avatar: avatar4,
      id: '1',
    },
  },
];

const MESSAGES = [
  {
    unread: true,
    status: 'online',
    id: 1,
    date: new Date(),
    user: {
      name: 'Mia Micky',
      avatar: avatar6,
      id: 1,
    },
    msg: `Hi James! It's Diana, I just wanted to let you know that we have to reschedule`,
  },
  {
    unread: true,
    status: 'online',
    id: 2,
    date: new Date(),
    user: {
      name: 'Tony Stevens',
      avatar: avatar7,
      id: 2,
    },
    msg: `Great, I'll see you tomorrow!.`,
  },
  {
    unread: false,
    status: 'away',
    id: 3,
    date: new Date(),
    user: {
      name: 'Tamara Romanoff',
      avatar: avatar8,
      id: 3,
    },
    msg: `We'll have to check that at the office and see if the client is on board with`,
  },
  {
    unread: true,
    status: 'offline',
    id: 4,
    date: new Date(),
    user: {
      name: 'Mary Jane Stark',
      avatar: avatar9,
      id: 4,
    },
    msg: 'Yeah! Seems fine by me!',
  },
  {
    unread: false,
    id: 5,
    date: new Date(),
    status: 'away',
    user: {
      name: 'Stagg Clothing',
      avatar: avatar10,
      id: 5,
    },
    msg: `We'll have to check that at the office and see if the client is on board with`,
  },
  {
    unread: false,
    id: 6,
    date: new Date(),
    status: 'offline',
    user: {
      name: 'Jake Parker',
      avatar: avatar11,
      id: 6,
    },
    msg: `Hi James! It's Diana, I just wanted to let you know that we have to reschedule`,
  },
  {
    unread: true,
    id: 7,
    date: new Date(),
    status: 'online',
    user: {
      name: 'Elaine Dreyfuss',
      avatar: avatar12,
      id: 7,
    },
    msg: '4 Friends in Common',
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
  POST_COMMENTS,
  GROUPS,
  BADGES,
  FRIENDS,
  EVENTS,
  INITIAL_EVENTS,
  NOTIFICATION,
  MESSAGES,
};

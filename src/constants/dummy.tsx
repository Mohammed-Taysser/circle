import audio from '../assets/music/skyline.mp3';
import video from '../assets/videos/video.mp4';

import avatar1 from '../assets/images/avatar/avatar-1.png';
import avatar2 from '../assets/images/avatar/avatar-2.png';
import avatar3 from '../assets/images/avatar/avatar-3.png';
import avatar4 from '../assets/images/avatar/avatar-4.png';
import avatar5 from '../assets/images/avatar/avatar-5.png';

import gallery1 from '../assets/images/gallery/gallery-1.jpg';
import gallery10 from '../assets/images/gallery/gallery-10.jpg';
import gallery2 from '../assets/images/gallery/gallery-2.jpg';
import gallery3 from '../assets/images/gallery/gallery-3.jpg';
import gallery4 from '../assets/images/gallery/gallery-4.jpg';
import gallery5 from '../assets/images/gallery/gallery-5.jpg';
import gallery6 from '../assets/images/gallery/gallery-6.jpg';
import gallery7 from '../assets/images/gallery/gallery-7.jpg';
import gallery8 from '../assets/images/gallery/gallery-8.jpg';
import gallery9 from '../assets/images/gallery/gallery-9.jpg';

import featured from '../assets/images/badges/featured.svg';
import happy from '../assets/images/badges/happy.svg';
import spring from '../assets/images/badges/spring.svg';
import target from '../assets/images/badges/target.svg';
import contentCreator from '../assets/images/badges/content-creator.svg';
import rocket from '../assets/images/badges/rocket.svg';

const POSTS: { [key in 'audio' | 'video' | 'gallery' | 'timeline']: Post[] } = {
  audio: [
    {
      id: '123gf4dd5gggggg645dfdf45fffffggg6',
      type: 'POST_AUDIO',
      gallery: [],
      user: {
        avatar: avatar1,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date(),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: audio,
      comments: [],
      reacts: {
        count: 0,
        reacts: {},
      },
    },
    {
      id: '123gf4dd564gfgfgfgfg545ggg6',
      type: 'POST_AUDIO',
      gallery: [],
      user: {
        avatar: avatar2,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date('2022'),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: audio,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
          star: [
            {
              id: '1',
              avatar: avatar3,
              username: 'mohammed-taysser',
              fullName: 'Mohammed Taysser',
              date: '2 yearn ago',
            },
            {
              id: '10',
              avatar: avatar4,
              username: 'mohammed',
              fullName: 'Mohammed',
              date: '2 yearn ago',
            },
          ],
        },
      },
    },
    {
      id: '123gf4dd56',
      type: 'POST_AUDIO',
      gallery: [],
      user: {
        avatar: avatar3,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date('2022'),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: audio,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
          star: [
            {
              id: '1',
              avatar: avatar1,
              username: 'mohammed-taysser',
              fullName: 'Mohammed Taysser',
              date: '2 yearn ago',
            },
            {
              id: '10',
              avatar: avatar2,
              username: 'mohammed',
              fullName: 'Mohammed',
              date: '2 yearn ago',
            },
          ],
        },
      },
    },
  ],
  video: [
    {
      id: '123gf4dd5gggggg645dfdf45fffffggg6',
      type: 'POST_VIDEO',
      gallery: [],
      user: {
        avatar: avatar1,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date(),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
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
        },
      },
    },
    {
      id: '123gf4dd564gfgfgfgfg545ggg6',
      type: 'POST_VIDEO',
      gallery: [],
      user: {
        avatar: avatar2,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date('2022'),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
          star: [
            {
              id: '1',
              avatar: avatar3,
              username: 'mohammed-taysser',
              fullName: 'Mohammed Taysser',
              date: '2 yearn ago',
            },
            {
              id: '10',
              avatar: avatar4,
              username: 'mohammed',
              fullName: 'Mohammed',
              date: '2 yearn ago',
            },
          ],
        },
      },
    },
    {
      id: '123gf4dd56',
      type: 'POST_VIDEO',
      gallery: [],
      user: {
        avatar: avatar3,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date('2022'),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
          star: [
            {
              id: '1',
              avatar: avatar1,
              username: 'mohammed-taysser',
              fullName: 'Mohammed Taysser',
              date: '2 yearn ago',
            },
            {
              id: '10',
              avatar: avatar2,
              username: 'mohammed',
              fullName: 'Mohammed',
              date: '2 yearn ago',
            },
          ],
        },
      },
    },
  ],
  gallery: [
    {
      id: '123gf4dd5gdfdfdfggggg645dfdf45ffffbghfgdfgg6',
      type: 'UPDATE_AVATAR',
      gallery: [],
      user: {
        avatar: avatar1,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date(),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: avatar3,
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
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
        },
      },
    },
    {
      id: '123gf4dd5gggggg645dfdf45fffffgdfgg6',
      type: 'UPDATE_COVER',
      gallery: [],
      user: {
        avatar: avatar1,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date(),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: gallery1,
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
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
        },
      },
    },
    {
      id: '123gf4dd5gggggg645dfdf45fffffggg6',
      type: 'POST_GALLERY',
      gallery: [gallery1, gallery2, gallery3, gallery4, gallery5],
      user: {
        avatar: avatar1,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date(),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
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
        },
      },
    },
    {
      id: '123gf4dd564gfgfgfgfg545ggg6',
      type: 'POST_GALLERY',
      gallery: [gallery6, gallery7, gallery8],
      user: {
        avatar: avatar2,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date('2022'),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
          star: [
            {
              id: '1',
              avatar: avatar3,
              username: 'mohammed-taysser',
              fullName: 'Mohammed Taysser',
              date: '2 yearn ago',
            },
            {
              id: '10',
              avatar: avatar4,
              username: 'mohammed',
              fullName: 'Mohammed',
              date: '2 yearn ago',
            },
          ],
        },
      },
    },
    {
      id: '123gf4dd56',
      type: 'POST_GALLERY',
      gallery: [gallery3, gallery4, gallery5, gallery9, gallery10],
      user: {
        avatar: avatar3,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date('2022'),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
          star: [
            {
              id: '1',
              avatar: avatar1,
              username: 'mohammed-taysser',
              fullName: 'Mohammed Taysser',
              date: '2 yearn ago',
            },
            {
              id: '10',
              avatar: avatar2,
              username: 'mohammed',
              fullName: 'Mohammed',
              date: '2 yearn ago',
            },
          ],
        },
      },
    },
  ],
  timeline: [
    {
      id: '12vcvc3gf123df45fffffgdfgg6',
      type: 'NEW_FRIEND',
      gallery: [],
      user: {
        avatar: avatar2,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date(),
      group: null,
      body: '',
      friend: {
        avatar: avatar3,
        username: 'Horsefighter',
        name: 'Horsefighter',
        id: '10j1',
        cover: gallery3,
        joinAt: new Date(),
        badges: [],
      },
      picture: avatar3,
      mapUrl: '',
      plyrUrl: video,
      comments: [
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
      ],
      reacts: {
        count: 101,
        reacts: {
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
        },
      },
    },
    {
      id: '12vcvc3gf4dd5gdfdfdfggggg645dfdf45fffffgdfgg6',
      type: 'JOIN_GROUP',
      gallery: [],
      user: {
        avatar: avatar4,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date(),
      group: {
        id: '10f',
        visibility: 'public',
        title: 'Developer Geeks',
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
        picture: gallery7,
        cover: gallery3,
        posts: 1092,
      },
      body: '',
      friend: null,
      picture: avatar3,
      mapUrl: '',
      plyrUrl: video,
      comments: [
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
      ],
      reacts: {
        count: 101,
        reacts: {
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
        },
      },
    },
    {
      id: '123gf4dd5gdfdfdfggggg645dfdf45fffffgdfgg6',
      type: 'UPDATE_AVATAR',
      gallery: [],
      user: {
        avatar: avatar1,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date(),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: avatar3,
      mapUrl: '',
      plyrUrl: video,
      comments: [
        {
          id: '123gf4dd5gdfdfdfggggg645dfdf45fvffffgdfgg6',
          user: {
            avatar: avatar2,
            name: 'Mohammed',
            id: '10v1',
          },
          body: 'Amazing avatar 😁',
          publishAt: new Date(),
        },
        {
          id: '123gf4dd5gdfdfdfggggg645dfdf45fffffghdfgg6',
          user: {
            avatar: avatar3,
            name: 'Amy Horsefighter',
            id: '10vv1',
          },
          body: 'kiss me la la lal',
          publishAt: new Date(),
        },
      ],
      reacts: {
        count: 101,
        reacts: {
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
        },
      },
    },
    {
      id: '123gf4dd5gggggg645dfdf45fffffgdfgg6',
      type: 'UPDATE_COVER',
      gallery: [],
      user: {
        avatar: avatar1,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date(),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: gallery1,
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
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
        },
      },
    },
    {
      id: '123gf4dd5gggggg645dfdf45fffffggg6',
      type: 'POST_GALLERY',
      gallery: [gallery1, gallery2, gallery3, gallery4, gallery5],
      user: {
        avatar: avatar1,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date(),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
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
        },
      },
    },
    {
      id: '123gf4dd564gfgfgfgfg545ggg6',
      type: 'POST_GALLERY',
      gallery: [gallery6, gallery7, gallery8],
      user: {
        avatar: avatar2,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date('2022'),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
          star: [
            {
              id: '1',
              avatar: avatar3,
              username: 'mohammed-taysser',
              fullName: 'Mohammed Taysser',
              date: '2 yearn ago',
            },
            {
              id: '10',
              avatar: avatar4,
              username: 'mohammed',
              fullName: 'Mohammed',
              date: '2 yearn ago',
            },
          ],
        },
      },
    },
    {
      id: '123gf4dd56',
      type: 'POST_GALLERY',
      gallery: [gallery3, gallery4, gallery5, gallery9, gallery10],
      user: {
        avatar: avatar3,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date('2022'),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
          star: [
            {
              id: '1',
              avatar: avatar1,
              username: 'mohammed-taysser',
              fullName: 'Mohammed Taysser',
              date: '2 yearn ago',
            },
            {
              id: '10',
              avatar: avatar2,
              username: 'mohammed',
              fullName: 'Mohammed',
              date: '2 yearn ago',
            },
          ],
        },
      },
    },
    {
      id: '123gf4dd5gggggg645dfdf45ffffmofggg6',
      type: 'POST_AUDIO',
      gallery: [],
      user: {
        avatar: avatar1,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date(),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: audio,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
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
        },
      },
    },
    {
      id: '123gf4dd56mo4gfgfgfgfg545ggg6',
      type: 'POST_AUDIO',
      gallery: [],
      user: {
        avatar: avatar2,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date('2022'),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: audio,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
          star: [
            {
              id: '1',
              avatar: avatar3,
              username: 'mohammed-taysser',
              fullName: 'Mohammed Taysser',
              date: '2 yearn ago',
            },
            {
              id: '10',
              avatar: avatar4,
              username: 'mohammed',
              fullName: 'Mohammed',
              date: '2 yearn ago',
            },
          ],
        },
      },
    },
    {
      id: '123mogf4dd56',
      type: 'POST_AUDIO',
      gallery: [],
      user: {
        avatar: avatar3,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date('2022'),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: audio,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
          star: [
            {
              id: '1',
              avatar: avatar1,
              username: 'mohammed-taysser',
              fullName: 'Mohammed Taysser',
              date: '2 yearn ago',
            },
            {
              id: '10',
              avatar: avatar2,
              username: 'mohammed',
              fullName: 'Mohammed',
              date: '2 yearn ago',
            },
          ],
        },
      },
    },
    {
      id: '123gf4dd5ggggggggggggg645dfdf45fffffggg6',
      type: 'POST_VIDEO',
      gallery: [],
      user: {
        avatar: avatar1,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date(),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
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
        },
      },
    },
    {
      id: '123gf4dd564ghghhggfgfgfgfg545ggg6',
      type: 'POST_VIDEO',
      gallery: [],
      user: {
        avatar: avatar2,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date('2022'),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
          star: [
            {
              id: '1',
              avatar: avatar3,
              username: 'mohammed-taysser',
              fullName: 'Mohammed Taysser',
              date: '2 yearn ago',
            },
            {
              id: '10',
              avatar: avatar4,
              username: 'mohammed',
              fullName: 'Mohammed',
              date: '2 yearn ago',
            },
          ],
        },
      },
    },
    {
      id: '123gf4dd5hj6',
      type: 'POST_VIDEO',
      gallery: [],
      user: {
        avatar: avatar3,
        name: 'Amy Horsefighter',
        id: '101',
      },
      publishAt: new Date('2022'),
      group: null,
      friend: null,
      body: "Sed ut perspiciatis unde omnis natus error sit voluptatem accusantium der doloremque laudantium Sed ut perspicia tisery. I'll be uploading new content every day, improving the quality.",
      picture: '',
      mapUrl: '',
      plyrUrl: video,
      comments: [],
      reacts: {
        count: 101,
        reacts: {
          star: [
            {
              id: '1',
              avatar: avatar1,
              username: 'mohammed-taysser',
              fullName: 'Mohammed Taysser',
              date: '2 yearn ago',
            },
            {
              id: '10',
              avatar: avatar2,
              username: 'mohammed',
              fullName: 'Mohammed',
              date: '2 yearn ago',
            },
          ],
        },
      },
    },
  ],
};

const GROUPS: Group[] = [
  {
    id: '10f',
    visibility: 'public',
    title: 'Developer Geeks',
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
    picture: gallery7,
    cover: gallery3,
    posts: 1092,
  },
  {
    id: '1',
    visibility: 'private',
    title: 'Sky fall',
    users: [
      {
        avatar: avatar1,
        name: 'Amy Horsefighter',
        id: '101',
      },
      {
        avatar: avatar2,
        name: 'Amy Horsefighter',
        id: '1001',
      },
      {
        avatar: avatar3,
        name: 'Amy Horsefighter',
        id: '1h01',
      },
      {
        avatar: avatar4,
        name: 'Amy Horsefighter',
        id: '10h01',
      },
      {
        avatar: avatar5,
        name: 'Amy Horsefighter',
        id: '10ggg1',
      },
      {
        avatar: gallery5,
        name: 'Amy Horsefighter',
        id: '100gggg1',
      },
    ],
    picture: gallery1,
    cover: gallery6,
    posts: 456,
  },
  {
    id: '10',
    visibility: 'public',
    title: 'Transformers',
    users: [
      {
        avatar: avatar3,
        name: 'Amy Horsefighter',
        id: '101',
      },
      {
        avatar: avatar4,
        name: 'Amy Horsefighter',
        id: '1001',
      },
    ],
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
    id: '3',
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
    id: '4',
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
    id: '4',
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
];

const FRIENDS: Friend[] = [
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

export { POSTS, GROUPS, BADGES, FRIENDS };

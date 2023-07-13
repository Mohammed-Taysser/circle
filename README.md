# [circle][vercel-live]

For developers see [`docs`](docs.md)

Live demo

- [![vercel](https://img.shields.io/badge/-vercel-05122A?style=plastic&logo=vercel)][vercel-live]
- [![Netlify Status](https://api.netlify.com/api/v1/badges/ea4a25db-b750-4830-bd20-5fccc0b2aabf/deploy-status)][netlify-live]

[vercel-live]: https://mantine-lime.vercel.app/
[netlify-live]: https://mantine-lime.netlify.app/

## Pages

### No Authentication

| Page | Path | Component                         |
| ---- | ---- | --------------------------------- |
| 404  | `*`  | [`404`](src/pages/public/404.tsx) |

### Need Authentication

| Page     | Path                 | Component                                 |
| -------- | -------------------- | ----------------------------------------- |
| Homepage | `/`                  | [`Homepage`](src/pages/auth/Homepage.tsx) |
| Profile  | `/profile/profileId` | [`Profile`](src/pages/auth/Profile.tsx)   |

## Features

- Modern and responsive layout

## Quick start 🚀

### First Step

Download the files from [`releases`](https://github.com/Mohammed-Taysser/mantine/releases) or clone it with **git** version control:

```shell
git clone https://github.com/Mohammed-Taysser/mantine.git
```

### Second Step

Inside mantine Directory Install Dependencies By

```shell
yarn
# OR
npm install
```

### Last Step

Start The Development Server

```shell
yarn dev
# OR
npm run dev
```

## Resources

- <https://gradients.app/en/shades/24de3e>

# LAMA

## pages

- profile
  - timeline
  - about
  - friends
  - pictures
  - videos
  - audios
  - groups
  - badges

## Components

- post

  - post an update
  - post an video
  - post an audio
  - post an single picture
  - post an images gallery
  - post an map
  - update avatar
  - update cover
  - join group
  - new friend

- post comment
- friend
- group
- avatar

.
├── public — Static assets such as robots.txt, index.html etc.
├── src
│ ├── core — Core modules, React hooks, customized theme, etc.
│ │ ├── config.ts — Application configuration
│ │ ├── ErrorBoundary.tsx — ErrorBoundary Component
│ │ ├── lazyLoading.tsx — Lazy loading routes
│ │ ├── routes.tsx — Application routes
│ │ └── App.tsx
│ ├── layout — Layout related components
│ │ ├── components
│ │ │ ├── Navbar.tsx
│ │ │ ├── NotificationsMenu.tsx
│ │ │ ├── ThemeButton.tsx
│ │ │ └── Footer.tsx
│ │ ├── Base.tsx
│ │ └── Minimal.tsx
│ ├── pages — Application page (screen) components
│ │ ├── public — Public page (no auth required) components
│ │ │ ├── Homepage.tsx
│ │ │ └── 404.tsx
│ │ ├── auth — Auth page (auth required) components
│ │ │ ├── Profile.tsx
│ │ │ └── Cart.tsx
│ │ └── dashboard
│ │ │ ├── Reports.tsx
│ │ │ └── Users.tsx
│ ├── assets — Static assets such as css, images
│ ├── dialogs — React components implementing modal dialogs
│ ├── common — Common (shared) React components
│ ├── global.d.ts — Global TypeScript declarations
│ ├── index.tsx — Single-page application (SPA) entry point
│ └── hooks
├── package.json — Workspace settings and NPM dependencies
└── tsconfig.json — TypeScript configuration

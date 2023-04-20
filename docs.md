# Mantine Documentation

## Getting start 🚀

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

## Components

### Banner

[source](src/common/Banner.tsx)

#### Props

| Props       | Type     | Default    | Description                 |
| ----------- | -------- | ---------- | --------------------------- |
| `title`     | `String` | `title`    | add Banner title            |
| `subtitle`  | `String` | `subtitle` | add Banner subtitle         |
| `className` | `String` | `''`       | add class to Banner wrapper |

#### Usage

```tsx
import Banner from './common/Banner';

<Banner title='Profile' subtitle='Welcome to your account dashboard!' />;
```

### Avatar

[source](src/common/Avatar.tsx)

#### Props

| Props       | Type      | Default                                          | Description                    |
| ----------- | --------- | ------------------------------------------------ | ------------------------------ |
| `src`       | `String`  | [`avatar`](src/assets/images/default/avatar.png) | set avatar picture             |
| `alt`       | `String`  | `avatar`                                         | set avatar alt text            |
| `sm`        | `Boolean` | `false`                                          | specify if small layout or not |
| `className` | `String`  | `''`                                             | add class to Avatar wrapper    |

#### Usage

```tsx
import Avatar from './common/Avatar';

<Avatar sm />;
<Avatar src={avatar.png} />;
```

### Friend

[source](src/common/Friend.tsx)

#### Props

| Props       | Type     | Default | Description                 |
| ----------- | -------- | ------- | --------------------------- |
| `user`      | `Friend` | `null`  | pass friend info            |
| `className` | `String` | `''`    | add class to Friend wrapper |

#### Usage

```tsx
import Friend from './common/Friend';

<Friend user={user} />;
```

### Group

[source](src/common/Group.tsx)

#### Props

| Props       | Type      | Default | Description                     |
| ----------- | --------- | ------- | ------------------------------- |
| `group`     | `Group`   | `null`  | pass Group info                 |
| `className` | `String`  | `''`    | add class to Group wrapper      |
| `colView`   | `Boolean` | `false` | specify if column layout or not |

#### Usage

```tsx
import Group from './common/Group';

<Group group={group} />;
```

### Post

[source](src/common/Post.tsx)

#### Props

| Props       | Type     | Default | Description               |
| ----------- | -------- | ------- | ------------------------- |
| `post`      | `Post`   | `null`  | pass Post info            |
| `className` | `String` | `''`    | add class to Post wrapper |

#### Usage

```tsx
import Post from './common/Post';

<Post post={post} />;
```

### Comments

[source](src/common/Comment.tsx)

#### Props

| Props       | Type            | Default | Description                   |
| ----------- | --------------- | ------- | ----------------------------- |
| `Comments`  | `PostComment[]` | `[]`    | pass comments                 |
| `className` | `String`        | `''`    | add class to Comments wrapper |

#### Usage

```tsx
import Comments from './common/Comment';

<Comments comments={comments} />;
```

## Context

### Post Reacts

[source](src/context/Reacts.tsx)

- Create modal for reacts with taps for each post react type like wow, like and so on.
- Store trigger post react as context with modal option to open or close.

## Packages

## Helpers

### timeToX

[timeToX](src/helpers/dayjs.ts)

Using `day.js` package to create `timeToX` helper function that return a value of readable format between passed date and now.

```ts
timeToX('1990-01-01'); //> "31 years ago"
```

## Project Structure

### RoadMap

```txt
.
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
```

### Tree

```txt
.
├── CHANGELOG
├── docs.md
├── index.html
├── LICENSE
├── package.json
├── postcss.config.js
├── README.md
├── src
│   ├── assets
│   │   ├── images
│   │   │   ├── background
│   │   │   │   ├── 404.svg
│   │   │   │   ├── banner-overlay.png
│   │   │   │   └── people.png
│   │   │   ├── default
│   │   │   │   └── avatar.png
│   │   │   ├── dummy
│   │   │   │   ├── avatar
│   │   │   │   │   ├── avatar-1.png
│   │   │   │   │   ├── avatar-2.png
│   │   │   │   │   ├── avatar-3.png
│   │   │   │   │   ├── avatar-4.png
│   │   │   │   │   └── avatar-5.png
│   │   │   │   ├── badges
│   │   │   │   │   ├── content-creator.svg
│   │   │   │   │   ├── featured.svg
│   │   │   │   │   ├── happy.svg
│   │   │   │   │   ├── rocket.svg
│   │   │   │   │   ├── spring.svg
│   │   │   │   │   └── target.svg
│   │   │   │   └── gallery
│   │   │   │       ├── gallery-10.jpg
│   │   │   │       ├── gallery-1.jpg
│   │   │   │       ├── gallery-2.jpg
│   │   │   │       ├── gallery-3.jpg
│   │   │   │       ├── gallery-4.jpg
│   │   │   │       ├── gallery-5.jpg
│   │   │   │       ├── gallery-6.jpg
│   │   │   │       ├── gallery-7.jpg
│   │   │   │       ├── gallery-8.jpg
│   │   │   │       └── gallery-9.jpg
│   │   │   └── icons
│   │   │       ├── avatar-circle.png
│   │   │       └── avatar-sm-circle.png
│   │   ├── music
│   │   │   └── skyline.mp3
│   │   ├── scss
│   │   │   ├── app.scss
│   │   │   ├── components
│   │   │   │   ├── avatar.scss
│   │   │   │   ├── banner.scss
│   │   │   │   ├── friend.scss
│   │   │   │   ├── group.scss
│   │   │   │   └── post.scss
│   │   │   ├── helpers
│   │   │   ├── layouts
│   │   │   └── pages
│   │   │       └── profile.scss
│   │   └── videos
│   │       └── video.mp4
│   ├── common
│   │   ├── Avatar.tsx
│   │   ├── Banner.tsx
│   │   ├── Comment.tsx
│   │   ├── Friend.tsx
│   │   ├── Group.tsx
│   │   └── Post.tsx
│   ├── components
│   │   ├── profile
│   │   │   ├── Banner.profile.tsx
│   │   │   ├── taps
│   │   │   │   ├── About.profile.tsx
│   │   │   │   ├── Audios.profile.tsx
│   │   │   │   ├── Badges.profile.tsx
│   │   │   │   ├── Friends.profile.tsx
│   │   │   │   ├── Groups.profile.tsx
│   │   │   │   ├── Photos.profile.tsx
│   │   │   │   ├── Timeline.profile.tsx
│   │   │   │   └── Videos.profile.tsx
│   │   │   └── Taps.profile.tsx
│   │   └── ReactsModal.tsx
│   ├── constants
│   │   └── dummy.tsx
│   ├── context
│   │   └── Reacts.tsx
│   ├── core
│   │   ├── App.tsx
│   │   ├── ErrorBoundary.tsx
│   │   └── Routes.tsx
│   ├── helpers
│   │   ├── dayjs.ts
│   │   ├── index.ts
│   │   ├── lightGallery.tsx
│   │   ├── post.tsx
│   │   ├── profile.ts
│   │   ├── reacts.tsx
│   │   └── url.ts
│   ├── layouts
│   │   ├── Aside.tsx
│   │   ├── Base.tsx
│   │   ├── _brand.tsx
│   │   ├── Header.tsx
│   │   ├── _logo.tsx
│   │   ├── _mainLinks.tsx
│   │   ├── Minimal.tsx
│   │   ├── Navbar.tsx
│   │   └── _user.tsx
│   ├── main.tsx
│   ├── pages
│   │   ├── auth
│   │   │   ├── Groups.tsx
│   │   │   ├── Homepage.tsx
│   │   │   ├── Profile.tsx
│   │   │   └── SingleGroup.tsx
│   │   └── public
│   │       ├── 404.tsx
│   │       └── Login.tsx
│   └── vite-env.d.ts
├── tailwind.config.js
├── tree.md
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock
```

## Resources

- <https://preview.themeforest.net/item/cirkle-social-networking-wordpress-theme/full_screen_preview/35127441>

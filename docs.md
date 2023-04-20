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

## Resources

- <https://preview.themeforest.net/item/cirkle-social-networking-wordpress-theme/full_screen_preview/35127441>

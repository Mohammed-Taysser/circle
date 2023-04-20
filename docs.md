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

```jsx
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

```jsx
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

```jsx
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

```jsx
import Group from './common/Group';

<Group group={group} />;
```

## Packages

## Resources

- <https://preview.themeforest.net/item/cirkle-social-networking-wordpress-theme/full_screen_preview/35127441>

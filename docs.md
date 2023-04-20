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

## Packages

## Resources

- <https://preview.themeforest.net/item/cirkle-social-networking-wordpress-theme/full_screen_preview/35127441>

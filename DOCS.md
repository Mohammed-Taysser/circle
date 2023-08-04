# Circle Documentation

## Pages

### No Authentication

| Page            | Path                  | Component                                               |
| --------------- | --------------------- | ------------------------------------------------------- |
| 404             | `*`                   | [`404`](src/pages/public/404.tsx)                       |
| Calender Help   | `/help/calender`      | [`Calender`](src/pages/public/help/Calender.help.tsx)   |
| Contact Us      | `/contact-us`         | [`Contact Us`](src/pages/public/ContactUs.tsx)          |
| Discover Groups | `/groups/discover`    | [`DiscoverGroups`](src/pages/public/DiscoverGroups.tsx) |
| Editor Help     | `/help/editor`        | [`Editor`](src/pages/public/help/Editor.help.tsx)       |
| Forget Password | `/forget-password`    | [`ForgetPassword`](src/pages/public/ForgetPassword.tsx) |
| Groups          | `/groups`             | [`Groups`](src/pages/public/Groups.tsx)                 |
| Help            | `/help`               | [`Help`](src/pages/public/Help.tsx)                     |
| Homepage        | `/`                   | [`Homepage`](src/pages/public/Homepage.tsx)             |
| Join Us         | `/join-us`            | [`JoinUs`](src/pages/public/JoinUs.tsx)                 |
| Post Details    | `/post/:postId`       | [`PostDetails`](src/pages/public/PostDetails.tsx)       |
| Profile         | `/profile/:profileId` | [`Profile`](src/pages/public/Profile.tsx)               |
| Results         | `/results`            | [`Results`](src/pages/public/Results.tsx)               |
| Single Group    | `/groups/:groupId`    | [`SingleGroup`](src/pages/public/SingleGroup.tsx)       |

### Need Authentication

| Page              | Path                  | Component                                                   |
| ----------------- | --------------------- | ----------------------------------------------------------- |
| Bookmarks         | `/bookmarks`          | [`Bookmarks`](src/pages/auth/Bookmarks.tsx)                 |
| Events            | `/events`             | [`Events`](src/pages/auth/Events.tsx)                       |
| FriendsGroups     | `/groups/friends`     | [`FriendsGroups`](src/pages/auth/FriendsGroups.tsx)         |
| Massager          | `/message`            | [`Massager`](src/pages/auth/Massager.tsx)                   |
| Networks          | `/networks`           | [`Networks`](src/pages/auth/Networks.tsx)                   |
| Notification      | `/notification`       | [`Notification`](src/pages/auth/Notification.tsx)           |
| RecommendedGroups | `/groups/recommended` | [`RecommendedGroups`](src/pages/auth/RecommendedGroups.tsx) |
| Setting           | `/setting`            | [`Setting`](src/pages/auth/Setting.tsx)                     |
| YourGroups        | `/groups/your`        | [`YourGroups`](src/pages/auth/YourGroups.tsx)               |

## Components

### Avatar

[source](src/common/Avatar.tsx)

#### Props

| Props       | Type      | Default                                          | Description                                                          |
| ----------- | --------- | ------------------------------------------------ | -------------------------------------------------------------------- |
| `src`       | `String`  | [`avatar`](src/assets/images/default/avatar.png) | specifies the source of the avatar image to the avatar wrapper       |
| `alt`       | `String`  | `avatar`                                         | specifies the alt text for the avatar                                |
| `sm`        | `Boolean` | `false`                                          | specifies whether or not to use a small image                        |
| `className` | `String`  | `''`                                             | specifies any custom classes to be added layout for the avatar image |

#### Usage

```tsx
import Avatar from './common/Avatar';

<Avatar sm />;
<Avatar src={avatar.png} alt='user-avatar' />;
```

### Badge

[source](src/common/Badge.tsx)

#### Props

| Props       | Type     | Default | Description                                                              |
| ----------- | -------- | ------- | ------------------------------------------------------------------------ |
| `badge`     | `Badge`  | `null`  | The badge object with properties for picture, label, message, and users. |
| `className` | `String` | `''`    | An optional string for customizing the CSS class of the component.       |

#### Usage

```tsx
import Badge from './common/Badge';

<Badge badge={badge} />;
```

### Banner

[source](src/common/Banner.tsx)

#### Props

| Props       | Type     | Default      | Description                                                                   |
| ----------- | -------- | ------------ | ----------------------------------------------------------------------------- |
| `title`     | `String` | `title`      | a string that sets the banner title                                           |
| `subtitle`  | `String` | `subtitle`   | a string that sets the banner subtitle                                        |
| `className` | `String` | `''`         | a string that allows for the addition of custom classes to the banner wrapper |
| `icon`      | `String` | `BiConfused` | a React component that sets the banner icon                                   |

#### Usage

```tsx
import Banner from './common/Banner';

<Banner title='Profile' subtitle='Welcome to your account dashboard!' />;
```

### CreatePost

[source](src/common/CreatePost.tsx)

#### Props

> No Props Yet

#### Usage

```tsx
import CreatePost from './common/CreatePost';

<CreatePost />;
```

### EmojiPicker

[source](src/common/EmojiPicker.tsx)

#### Props

| Props           | Type       | Default                 | Description                                                                          |
| --------------- | ---------- | ----------------------- | ------------------------------------------------------------------------------------ |
| `onEmojiSelect` | `Function` | `(params: any) => void` | callback function that receives an object with information about the selected emoji. |

#### Usage

```tsx
import EmojiPicker from './common/EmojiPicker';

<EmojiPicker onEmojiSelect={} />;
```

### Gallery

[source](src/common/Gallery.tsx)

#### Props

| Props       | Type       | Default           | Description                                                |
| ----------- | ---------- | ----------------- | ---------------------------------------------------------- |
| `galleryId` | `String`   | `just-gallery-id` | provide an ID for the gallery.                             |
| `gallery`   | `String[]` | `[]`              | specify an array of image URLs.                            |
| `full`      | `Boolean`  | `false`           | determine if the gallery should be displayed in full mode. |

#### Usage

```tsx
import Gallery from './common/Gallery';

<Gallery gallery={[]} />;
```

### Group

[source](src/common/Group.tsx)

#### Props

| Props       | Type      | Default | Description                                                                    |
| ----------- | --------- | ------- | ------------------------------------------------------------------------------ |
| `className` | `String`  | `''`    | allows adding additional classes to the group card.                            |
| `colView`   | `Boolean` | `false` | determines whether the group card should be displayed in a column view or not. |
| `group`     | `Group`   | `null`  | object field that contains the group information                               |

#### Usage

```tsx
import Group from './common/Group';

<Group group={group} />;

// column View
<Group group={group} colView />;
```

### InfoBanner

[source](src/common/InfoBanner.tsx)

#### Props

| Props       | Type           | Default | Description                                                                  |
| ----------- | -------------- | ------- | ---------------------------------------------------------------------------- |
| `cover`     | `string`       | `''`    | string representing the URL of the cover image                               |
| `avatar`    | `string`       | `''`    | string representing the URL of the avatar image                              |
| `name`      | `string`       | `''`    | string representing the user's name                                          |
| `username`  | `string`       | `''`    | string representing the user's username                                      |
| `verified`  | `boolean`      | `''`    | boolean representing whether the user is verified or not                     |
| `extraInfo` | `ReactElement` | `<></>` | JSX element representing any additional information to display in the banner |
| `className` | `string`       | `''`    | string representing additional CSS classes to apply to the banner            |

#### Usage

```tsx
import InfoBanner from './common/InfoBanner';

<InfoBanner user={user} />;
```

### PlyrViewer

[source](src/common/PlyrViewer.tsx)

#### Props

| Props       | Type     | Default        | Description                                                          |
| ----------- | -------- | -------------- | -------------------------------------------------------------------- |
| `src`       | `string` | `''`           | specifies the source of the media to be played.                      |
| `MediaType` | `audio`  | `'video'`      | specifies the type of media to be played, either 'audio' or 'video'. |
| `title`     | `string` | `'Plyr Title'` | specifies the title of the media to be played.                       |

#### Usage

```tsx
import PlyrViewer from './common/PlyrViewer';

<PlyrViewer src='audio.mp3' MediaType='audio' />;

<PlyrViewer src='video.mp3' MediaType='video' />;
```

### Post

[source](src/common/Post.tsx)

#### Props

| Props       | Type      | Default | Description                                                                                                                                                                            |
| ----------- | --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `className` | `String`  | `''`    | A string field that allows for additional CSS classes to be added to the post card wrapper.                                                                                            |
| `post`      | `Post`    | `null`  | The main field of the class, which is an object containing information about the post, including the user who posted, the post content, and the number of likes, comments, and shares. |
| `isShared`  | `Boolean` | `false` | A boolean field that specifies whether the post is a shared post or not. If true, the post footer is not displayed.                                                                    |

#### Usage

```tsx
import Post from './common/Post';

<Post post={post} />;

<Post post={post} isShared />;
```

### Skeleton

[source](src/common/Skeleton.tsx)

#### variant

- Skeleton
- Friend
- Post
- Badge
- Comment

#### Props

| Props     | Type              | Default | Description                                                                                                                                                            |
| --------- | ----------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `repeat`  | `number`          | `1`     | number of Skeleton repetition                                                                                                                                          |
| `variant` | `SkeletonVariant` | `''`    | The 'Skeleton', 'Friend', 'Post', 'Badge', and 'Comment' components are defined within the function and are used as the different variants of the loading skeleton UI. |

#### Usage

```tsx
import Skeleton from './common/Skeleton';

<Skeleton variant='post' repeat={6} />;
<Skeleton variant='friend' repeat={6} />;
<Skeleton variant='badge' repeat={6} />;
```

### Taps

[source](src/common/Taps.tsx)

#### Props

| Props  | Type          | Default | Description   |
| ------ | ------------- | ------- | ------------- |
| `taps` | `SingleTap[]` | `[]`    | array of taps |

#### Usage

```tsx
import Taps from './common/Taps';

<Taps taps={TAPS} />;
```

### TiptapEditor

[source](src/common/TiptapEditor.tsx)

#### Props

| Props         | Type                                                | Default                                                       | Description                                     |
| ------------- | --------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------- |
| `noFontSizes` | `Boolean`                                           | `false`                                                       | specifies if hide font size controller or not   |
| `content`     | `String`                                            | `''`                                                          | the initial content of the editor               |
| `getText`     | `(content: { text: string; html: string }) => void` | `(data: { text: string; html: string }) => console.log(data)` | callback function to retrieve the text content. |

#### Usage

```tsx
import TiptapEditor from './common/TiptapEditor';

<TiptapEditor content={initContent} />;

<TiptapEditor
  content={initContent}
  getText={(content: { text: string; html: string }) => {}}
/>;
```

### User

[source](src/common/User.tsx)

#### Props

| Props       | Type     | Default | Description                                                                                                     |
| ----------- | -------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| `user`      | `User`   | `null`  | object that contains information about the user, such as their name, username, avatar, cover image, and badges. |
| `className` | `String` | `''`    | a string that represents the CSS class name for the component.                                                  |

#### Usage

```tsx
import User from './common/User';

<User user={user} />;
```

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
├── CHANGELOG
├── DOCS.md
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
│   │   │   │   ├── bg-event-day.webp
│   │   │   │   ├── chat.svg
│   │   │   │   ├── contact-us-bg.svg
│   │   │   │   ├── forget-password.svg
│   │   │   │   ├── group
│   │   │   │   │   ├── discover.svg
│   │   │   │   │   ├── friends.svg
│   │   │   │   │   ├── recommended.svg
│   │   │   │   │   └── your.svg
│   │   │   │   ├── help
│   │   │   │   │   ├── calender.svg
│   │   │   │   │   ├── contact.svg
│   │   │   │   │   └── editor.svg
│   │   │   │   ├── newsletter.svg
│   │   │   │   ├── no-friend-request.svg
│   │   │   │   ├── registration.svg
│   │   │   │   └── search
│   │   │   │       ├── groups.svg
│   │   │   │       ├── no-results.svg
│   │   │   │       └── users.svg
│   │   │   ├── default
│   │   │   │   ├── avatar.png
│   │   │   │   ├── cover.jpg
│   │   │   │   └── group.jpg
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
│   │   │   │   │   ├── hot-hunter.svg
│   │   │   │   │   ├── king.svg
│   │   │   │   │   ├── rocket.svg
│   │   │   │   │   ├── spring.svg
│   │   │   │   │   ├── target.svg
│   │   │   │   │   ├── trending.svg
│   │   │   │   │   └── universe.svg
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
│   │   │       ├── avatar-sm-circle.png
│   │   │       └── favicon.svg
│   │   ├── music
│   │   │   └── skyline.mp3
│   │   ├── pdf
│   │   │   └── cv.pdf
│   │   ├── scss
│   │   │   ├── app.scss
│   │   │   ├── components
│   │   │   │   ├── avatar.scss
│   │   │   │   ├── createPost.scss
│   │   │   │   ├── group.scss
│   │   │   │   ├── infoBanner.scss
│   │   │   │   ├── post.scss
│   │   │   │   └── user.scss
│   │   │   ├── helpers
│   │   │   │   └── _base.scss
│   │   │   └── layouts
│   │   └── videos
│   │       └── video.mp4
│   ├── common
│   │   ├── Avatar.tsx
│   │   ├── Badge.tsx
│   │   ├── Banner.tsx
│   │   ├── CreatePost.tsx
│   │   ├── EmojiPicker.tsx
│   │   ├── Gallery.tsx
│   │   ├── Group.tsx
│   │   ├── InfoBanner.tsx
│   │   ├── plyr.tsx
│   │   ├── Post.tsx
│   │   ├── Skeleton.tsx
│   │   ├── Taps.tsx
│   │   ├── TiptapEditor.tsx
│   │   └── User.tsx
│   ├── components
│   │   ├── comments
│   │   │   └── WriteComment.tsx
│   │   ├── contactUs
│   │   │   └── ContactIcon.tsx
│   │   ├── createPost
│   │   │   └── modal
│   │   │       ├── File.tap.tsx
│   │   │       ├── Gallery.tap.tsx
│   │   │       ├── Taps.modal.tsx
│   │   │       └── Youtube.tap.tsx
│   │   ├── group
│   │   │   └── taps
│   │   │       ├── About.group.tsx
│   │   │       ├── Audios.group.tsx
│   │   │       ├── Badges.group.tsx
│   │   │       ├── Members.group.tsx
│   │   │       ├── Photos.group.tsx
│   │   │       ├── Timeline.group.tsx
│   │   │       └── Videos.group.tsx
│   │   ├── massager
│   │   │   ├── ContactInfo.tsx
│   │   │   ├── Massages.tsx
│   │   │   ├── NoContactSelected.tsx
│   │   │   ├── NoMessages.tsx
│   │   │   └── SingleMessage.tsx
│   │   ├── notification
│   │   │   └── SingleNotification.tsx
│   │   ├── post
│   │   │   ├── body
│   │   │   │   ├── Embedded.tsx
│   │   │   │   ├── TextContent.tsx
│   │   │   │   └── viewers
│   │   │   │       ├── Pdf.tsx
│   │   │   │       └── Youtube.tsx
│   │   │   ├── Body.post.tsx
│   │   │   ├── Footer.post.tsx
│   │   │   ├── header
│   │   │   │   └── PostDropdown.tsx
│   │   │   ├── Header.post.tsx
│   │   │   └── Viewers.tsx
│   │   ├── profile
│   │   │   └── taps
│   │   │       ├── About.profile.tsx
│   │   │       ├── Audios.profile.tsx
│   │   │       ├── Badges.profile.tsx
│   │   │       ├── Friends.profile.tsx
│   │   │       ├── Photos.profile.tsx
│   │   │       ├── Timeline.profile.tsx
│   │   │       └── Videos.profile.tsx
│   │   ├── registration
│   │   │   ├── Login.tsx
│   │   │   ├── Register.tsx
│   │   │   └── SocialMediaIntegration.tsx
│   │   ├── search
│   │   │   ├── Groups.results.tsx
│   │   │   └── Users.results.tsx
│   │   └── settings
│   │       ├── BasicInfo.tsx
│   │       ├── ChangePassword.tsx
│   │       ├── ContactInfo.tsx
│   │       ├── EducationAndOthersInformation.tsx
│   │       └── HobbiesAndInterests.tsx
│   ├── constants
│   │   ├── default.ts
│   │   ├── dummy.tsx
│   │   ├── layout.tsx
│   │   ├── post.tsx
│   │   └── seo.ts
│   ├── containers
│   │   ├── Async.tsx
│   │   └── Groups.tsx
│   ├── core
│   │   ├── App.tsx
│   │   ├── ErrorBoundary.tsx
│   │   └── Routes.tsx
│   ├── dialogs
│   │   └── Newsletter.tsx
│   ├── helpers
│   │   ├── dayjs.ts
│   │   └── index.ts
│   ├── hooks
│   │   ├── useHelmet.tsx
│   │   └── useSearchInput.tsx
│   ├── layouts
│   │   ├── aside
│   │   │   └── ContactFriends.tsx
│   │   ├── Aside.tsx
│   │   ├── Base.tsx
│   │   ├── header
│   │   │   ├── EventsTimeline.tsx
│   │   │   ├── MiniCalender.tsx
│   │   │   └── Navigation.tsx
│   │   ├── Header.tsx
│   │   ├── navbar
│   │   │   ├── FriendsDropdown.tsx
│   │   │   ├── Logo.tsx
│   │   │   ├── MessagesDropdown.tsx
│   │   │   ├── NotificationDropdown.tsx
│   │   │   ├── SearchInput.tsx
│   │   │   └── UserDropdown.tsx
│   │   └── Navbar.tsx
│   ├── main.tsx
│   ├── modal
│   │   ├── Cropper.modal.tsx
│   │   ├── events
│   │   │   ├── CreateEvent.modal.tsx
│   │   │   └── Event.modal.tsx
│   │   ├── posts
│   │   │   ├── Comments.modal.tsx
│   │   │   ├── CreatePost.modal.tsx
│   │   │   └── Reacts.modal.tsx
│   │   └── Search.modal.tsx
│   ├── pages
│   │   ├── auth
│   │   │   ├── Bookmarks.tsx
│   │   │   ├── Events.tsx
│   │   │   ├── FriendsGroups.tsx
│   │   │   ├── Massager.tsx
│   │   │   ├── Networks.tsx
│   │   │   ├── Notification.tsx
│   │   │   ├── RecommendedGroups.tsx
│   │   │   ├── Setting.tsx
│   │   │   └── YourGroups.tsx
│   │   └── public
│   │       ├── 404.tsx
│   │       ├── ContactUs.tsx
│   │       ├── DiscoverGroups.tsx
│   │       ├── ForgetPassword.tsx
│   │       ├── Groups.tsx
│   │       ├── help
│   │       │   ├── Calender.help.tsx
│   │       │   └── Editor.help.tsx
│   │       ├── Help.tsx
│   │       ├── Homepage.tsx
│   │       ├── JoinUs.tsx
│   │       ├── PostDetails.tsx
│   │       ├── Profile.tsx
│   │       ├── Results.tsx
│   │       └── SingleGroup.tsx
│   ├── providers
│   │   ├── Mantine.tsx
│   │   ├── Modals.tsx
│   │   └── Router.tsx
│   ├── types
│   │   └── vite-env.d.ts
│   └── validations
│       └── index.ts
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
└── yarn.lock

59 directories, 197 files
```

## Resources

- <https://preview.themeforest.net/item/cirkle-social-networking-wordpress-theme/full_screen_preview/35127441>

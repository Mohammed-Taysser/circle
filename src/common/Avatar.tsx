import avatar from '../assets/images/default/avatar.png';

/**
 * Avatar component
 * @usage

- use `className` to add classes to banner wrapper
- use `src` to set avatar picture
- use `alt` to set avatar alt text
- use `sm` to specify if small layout or not

 * @returns {React.ReactElement}
 */
function Avatar(props: AvatarProps): React.ReactElement {
  const cl = `avatar ${props.sm ? 'sm' : ''} ${props.className}`;

  return (
    <div className={cl}>
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

Avatar.defaultProps = {
  src: avatar,
  alt: 'avatar',
  className: '',
  sm: false,
};

export default Avatar;

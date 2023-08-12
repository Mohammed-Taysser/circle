import { Indicator } from '@mantine/core';
import { avatar } from '../constants/default';

/**
 * Avatar component
 *
 * This component renders an avatar image with optional small layout and custom classes.
 *
 * @usage
 * - use `className` specifies any custom classes to be added to the avatar wrapper
 * - use `src` specifies the source of the avatar image
 * - use `alt` specifies the alt text for the avatar image
 * - use `sm` specifies whether or not to use a small layout for the avatar image
 * - use `status` a string representing the color of the status indicator, or null if no status indicator should be displayed
 */
function Avatar(props: AvatarProps) {
  return (
    <Indicator
      color={props.status}
      offset={7}
      processing
      withBorder
      disabled={!props.status}
      position='bottom-end'
      zIndex={2}
    >
      <div className={`avatar ${props.sm ? 'sm' : ''} ${props.className}`}>
        <img src={props.src} alt={props.alt} />
      </div>
    </Indicator>
  );
}

Avatar.defaultProps = {
  src: avatar,
  alt: 'avatar',
  className: '',
  sm: false,
  status: null,
};

export default Avatar;

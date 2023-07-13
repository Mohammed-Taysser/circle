import { Box, Text, createStyles } from '@mantine/core';

const useContactInfoStyles = createStyles((theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.white,
  },
  icon: {
    marginRight: theme.spacing.md,
    backgroundColor: 'transparent',
  },
  title: {
    color: theme.colors[theme.primaryColor][0],
  },
  description: {
    color: theme.white,
  },
}));

function ContactIcon(props: ContactIconProps) {
  const { classes, cx } = useContactInfoStyles();

  return (
    <div className={cx(classes.wrapper, props.className)}>
      <Box mr='md'>
        <props.icon size='1.5rem' />
      </Box>

      <div>
        <Text size='xs' className={classes.title}>
          {props.title}
        </Text>
        <Text className={classes.description}>{props.description}</Text>
      </div>
    </div>
  );
}

export default ContactIcon;

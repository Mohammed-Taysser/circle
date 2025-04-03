import { Burger, Flex, Grid, Header, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Logo from '../Logo';

function DashboardNavbar(props: NavbarProps) {
  const theme = useMantineTheme();
  const isSmallerScreen = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Header
      height={isSmallerScreen ? 60 : 80}
      className='md:px-10 px-4 border-0 shadow-nice'
    >
      <Grid
        className={`${isSmallerScreen ? 'h-[65px]' : 'h-[80px]'}`}
        align='center'
      >
        <Grid.Col span={2}>
          <Logo />
        </Grid.Col>

        <Grid.Col lg={3} md={4} span={3}>
          <div className='hidden md:flex'></div>
          <Flex justify='end' className='md:hidden'>
            <Burger
              opened={props.isHeaderOpen}
              onClick={() => props.setIsHeaderOpen((prev) => !prev)}
              color={theme.colors.gray[6]}
              title='Toggle header'
            />
          </Flex>
        </Grid.Col>
      </Grid>
    </Header>
  );
}

export default DashboardNavbar;

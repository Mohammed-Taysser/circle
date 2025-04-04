// Navbar Layout
interface NavbarProps {
  isHeaderOpen: boolean;
  setIsHeaderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Aside Layout
interface AsideContactsProps {
  setIsAsideOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

// Header Layout
interface HeaderProps {
  isHeaderOpen: boolean;
  setIsHeaderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface HeaderNavigationProps {
  setIsHeaderOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

import {
  Headerdiv,
  Menu_icon,
  Logo,
  Header_button_container
} from './Header.style';

import { useState } from 'react';
import Login from './Login';

const Header = ({ isLogin }) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <Headerdiv>
      <Menu_icon className="fas fa-bars" />
      <Logo>Whoever</Logo>
        {isLogin ? (
          <Login />
        ) : (
          <Login />
        )}
    </Headerdiv>
  );
};

export default Header;
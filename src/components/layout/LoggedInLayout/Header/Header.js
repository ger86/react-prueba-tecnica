import React, {useState} from 'react';
import useUserContext from 'hooks/useUserContext';
import HeaderView from './HeaderView';

function Header() {
  const [userMenuElement, setUserMenuElement] = useState(null);
  const {user} = useUserContext();

  function openUserMenu(event) {
    setUserMenuElement(event.currentTarget);
  }

  function closeUserMenu() {
    setUserMenuElement(null);
  }

  return (
    <HeaderView
      onClickUserName={openUserMenu}
      onCloseUserMenu={closeUserMenu}
      userMenuElement={userMenuElement}
      user={user}
    />
  );
}

export default Header;

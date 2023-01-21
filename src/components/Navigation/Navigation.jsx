import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import { UserMenu } from 'components/UserMenu/UserMenu';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        {!isLoggedIn && <NavLink to="/register">Register</NavLink>}
        {!isLoggedIn && <NavLink to="/login">Login</NavLink>}
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
      {isLoggedIn && <UserMenu />}
    </>
  );
}

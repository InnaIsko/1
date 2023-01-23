import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/auth/auth-selector';
import { UserMenu } from 'components/UserMenu/UserMenu';

import { AppBar, Link, Toolbar, Typography } from '@mui/material';

export function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: ' #57AAA2 ',
      }}
    >
      <Toolbar>
        <nav>
          <Link
            variant="h6"
            component={NavLink}
            to="/"
            sx={{
              mr: 15,
              fontFamily: 'Explora',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: '#EFE7D6',
              textDecoration: 'none',
            }}
          >
            Home
          </Link>
          {isLoggedIn && (
            <Link
              variant="h6"
              component={NavLink}
              to="/contacts"
              sx={{
                fontFamily: 'Explora',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#EFE7D6',
                textDecoration: 'none',
              }}
            >
              Contacts
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              variant="h6"
              component={NavLink}
              to="/register"
              sx={{
                mr: 4,
                ml: 50,
                fontFamily: 'Explora',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#EFE7D6',
                textDecoration: 'none',
              }}
            >
              Register
            </Link>
          )}
          {!isLoggedIn && (
            <Link
              variant="h6"
              component={NavLink}
              to="/login"
              sx={{
                fontFamily: 'Explora',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: '#EFE7D6',
                textDecoration: 'none',
              }}
            >
              Login
            </Link>
          )}
        </nav>
        <Typography
          component="div"
          sx={{
            ml: 90,
          }}
        >
          {isLoggedIn && <UserMenu />}
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

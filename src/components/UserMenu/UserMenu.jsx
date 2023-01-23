import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { selectEmail } from 'redux/auth/auth-selector';
import { logOut } from 'redux/auth/auth-operations';

import { Button, Typography } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';

export function UserMenu() {
  const dispatch = useDispatch();

  const email = useSelector(selectEmail);
  return (
    <Typography
      sx={{
        display: { xs: 'none', md: 'flex' },
      }}
    >
      <Typography
        variant="h6"
        component="span"
        sx={{
          fontFamily: 'Explora',
          fontWeight: 500,
          letterSpacing: '.2rem',
          color: '#EFE7D6',
        }}
      >
        {email}
      </Typography>
      <Button
        type="button"
        variant="elevated"
        startIcon={<LogoutIcon />}
        sx={{
          color: '#EFE7D6',
          ml: 5,
          fontFamily: 'Explora',
          fontWeight: 700,
          letterSpacing: '.1rem',
        }}
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </Typography>
  );
}

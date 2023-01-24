import { useDispatch, useSelector } from 'react-redux';
import { selectError } from 'redux/auth/auth-selector';
import { useState } from 'react';
import { register } from 'redux/auth/auth-operations';

import {
  FilledInput,
  InputAdornment,
  IconButton,
  InputLabel,
  Box,
  Button,
  Alert,
} from '@mui/material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);

  const error = useSelector(selectError);
  console.log(error);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      {error && (
        <Alert variant="outlined" severity="error">
          Sorry, you have made a mistake, try again!
        </Alert>
      )}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <InputLabel
            htmlFor="filled-name"
            sx={{
              m: 3,
              color: '#57AAA2',
              fontFamily: 'Explora',
              fontWeight: 600,
              letterSpacing: '.2rem',
            }}
          >
            Name
          </InputLabel>
          <InputLabel
            htmlFor="filled-email"
            sx={{
              m: 3,
              color: '#57AAA2',
              fontFamily: 'Explora',
              fontWeight: 600,
              letterSpacing: '.2rem',
            }}
          >
            Email
          </InputLabel>
          <InputLabel
            htmlFor="filled-password"
            sx={{
              m: 3,
              color: '#57AAA2',
              fontFamily: 'Explora',
              fontWeight: 600,
              letterSpacing: '.2rem',
            }}
          >
            Password
          </InputLabel>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'space-between',
          }}
        >
          <FilledInput
            type="text"
            name="name"
            id="filled-name"
            sx={{
              backgroundColor: ' rgba(87, 170, 162, 0.2) ',
              mb: 2,
            }}
          />
          <FilledInput
            type="email"
            name="email"
            id="filled-email"
            sx={{
              backgroundColor: ' rgba(87, 170, 162, 0.2) ',
              mb: 2,
            }}
          />
          <FilledInput
            name="password"
            id="filled-password"
            sx={{
              backgroundColor: ' rgba(87, 170, 162, 0.2) ',
              mb: 2,
            }}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </Box>
      </Box>
      <Button
        type="submit"
        variant="outlined"
        startIcon={<HowToRegIcon />}
        sx={{
          color: '#57AAA2',
          ml: 28,
          mt: 3,
          fontFamily: 'Explora',
          fontWeight: 700,
          letterSpacing: '.1rem',
          borderColor: '#57AAA2',
        }}
      >
        Register
      </Button>
    </form>
  );
};

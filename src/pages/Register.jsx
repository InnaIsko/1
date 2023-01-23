import { RegisterForm } from 'components/RegisterForm/RegisterForm';

import { Typography } from '@mui/material';

export function Register() {
  return (
    <div>
      <Typography
        variant="h4"
        component="h2"
        sx={{
          color: '#57AAA2',
          m: 3,
          fontFamily: 'Explora',
          fontWeight: 700,
          letterSpacing: '.2rem',
          textAlign: 'center',
          textShadow: '2px 3px 4px #4F9393',
        }}
      >
        Registration
      </Typography>
      <RegisterForm />
    </div>
  );
}

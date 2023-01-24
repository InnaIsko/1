import { Typography } from '@mui/material';

export function Home() {
  return (
    <Typography
      variant="h6"
      component="h3"
      sx={{
        mr: 55,
        ml: 55,
        mt: 20,
        mb: 20,
        color: '#57AAA2',
        fontFamily: 'Explora',
        fontWeight: 600,
        letterSpacing: '.1rem',
      }}
    >
      Your online phone book welcomes you!!! This is where you can do any
      manipulations with your contacts and conveniently store them online. So
      let's get started, from the top of the navigation menu you can go to the
      registration or authorization form, after authorization, your contact list
      will appear. Good luck with your work.
    </Typography>
  );
}

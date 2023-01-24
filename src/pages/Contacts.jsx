// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Helmet } from 'react-helmet';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/Form/Form';

import { Grid, Box, Typography } from '@mui/material';

export function Contacts() {
  //   const dispatch = useDispatch();
  //   const isLoading = useSelector(selectLoading);

  //   useEffect(() => {
  //     dispatch(fetchTasks());
  //   }, [dispatch]);

  return (
    <Box sx={{ flexGrow: 1 }}>
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
        Phonebook
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Typography
            variant="h6"
            component="h3"
            sx={{
              color: '#57AAA2',
              ml: 26,
              mt: 3,
              fontFamily: 'Explora',
              fontWeight: 700,
              letterSpacing: '.1rem',
            }}
          >
            Your contacts
          </Typography>
        </Grid>
        <Grid
          item
          xs={5}
          sx={{
            ml: 12,
          }}
        >
          <ContactForm />
        </Grid>
        <Grid
          item
          xs={7}
          sx={{
            mt: -25,
          }}
        >
          <ContactList />
        </Grid>
        <Grid item xs={5}>
          <Filter />
        </Grid>
      </Grid>
    </Box>
  );
}

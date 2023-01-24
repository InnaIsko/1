import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { ContactForm } from 'components/Form/Form';

import { Grid, Box, Typography } from '@mui/material';

export function Contacts() {
  const contacts = useSelector(selectContacts);
  const cotactsLength = contacts.length !== 0;

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
        <Grid item xs={6}>
          {cotactsLength && (
            <Typography
              variant="h6"
              component="h3"
              sx={{
                ml: 13,
                color: '#57AAA2',
                fontFamily: 'Explora',
                fontWeight: 600,
                letterSpacing: '.1rem',
                textShadow: '1px 2px 2px #4F9393',
              }}
            >
              Your contacts
            </Typography>
          )}
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            ml: 125,
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
          {cotactsLength && <Filter />}
        </Grid>
      </Grid>
    </Box>
  );
}

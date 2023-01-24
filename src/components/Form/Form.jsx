import { nanoid } from 'nanoid';

import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContacts } from 'redux/operations';

import {
  FilledInput,
  InputLabel,
  Box,
  Button,
  Typography,
} from '@mui/material';
import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';

export function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const getInputValue = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;

      case 'number':
        setNumber(event.currentTarget.value);
        break;

      default:
        break;
    }
  };

  const handleSabmit = event => {
    event.preventDefault();

    const nameValue = contacts.some(elem => elem.name === name);

    if (nameValue) {
      alert(`${name} is olredi in contacts`);
    } else {
      const contactInfo = { name, number, id: nanoid() };
      dispatch(addContacts(contactInfo));
    }

    setName('');
    setNumber('');
  };
  console.log();

  return (
    <>
      <form onSubmit={handleSabmit}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <InputLabel
              sx={{
                m: 3,
                color: '#57AAA2',
                fontFamily: 'Explora',
                fontWeight: 600,
                fontSize: 20,
                letterSpacing: '.2rem',
              }}
              htmlFor="filled-name"
            >
              Name
            </InputLabel>
            <InputLabel
              sx={{
                m: 3,
                color: '#57AAA2',
                fontFamily: 'Explora',
                fontWeight: 600,
                fontSize: 20,
                letterSpacing: '.2rem',
              }}
              htmlFor="filled-number"
            >
              Number
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
              sx={{
                backgroundColor: ' rgba(87, 170, 162, 0.2) ',
                mb: 2,
                width: 250,
              }}
              id="filled-name"
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              value={name}
              onChange={getInputValue}
            />
            <FilledInput
              sx={{
                backgroundColor: ' rgba(87, 170, 162, 0.2) ',
                mb: 2,
              }}
              id="filled-number"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              value={number}
              onChange={getInputValue}
            />
          </Box>
        </Box>
        <Button
          type="submit"
          variant="outlined"
          startIcon={<PersonAddAlt1Icon />}
          sx={{
            color: '#57AAA2',
            ml: 26,
            mt: 3,
            fontFamily: 'Explora',
            fontWeight: 700,
            letterSpacing: '.1rem',
            borderColor: '#57AAA2',
          }}
        >
          Add Contact
        </Button>
      </form>
    </>
  );
}

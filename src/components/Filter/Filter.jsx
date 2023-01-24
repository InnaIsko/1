import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { getValue } from 'redux/contactsSlice';

import { IconButton, FilledInput, InputLabel } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';

export function Filter() {
  const filterName = useSelector(selectFilter);

  const dispatch = useDispatch();

  const getInputValue = event => {
    dispatch(getValue(event.currentTarget.value));
  };
  return (
    <InputLabel
      sx={{
        mt: 10,
        color: '#57AAA2',
        fontFamily: 'Explora',
        fontWeight: 600,
        fontSize: 18,
        letterSpacing: '.1rem',
      }}
    >
      Find contacts by name
      <IconButton
        sx={{
          ml: 2,
          color: '#EFE7D6',
          backgroundColor: '#57AAA2',
        }}
      >
        <PersonSearchIcon />
      </IconButton>
      <FilledInput
        type="text"
        name="filter"
        size="small"
        value={filterName}
        onChange={getInputValue}
        sx={{
          m: 3,
          fontFamily: 'Explora',
          fontWeight: 600,
          width: 250,
        }}
      />
    </InputLabel>
  );
}

import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

import {
  ListItem,
  IconButton,
  Typography,
  ListItemAvatar,
  Avatar,
} from '@mui/material';
import AutoDeleteIcon from '@mui/icons-material/AutoDelete';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonPinIcon from '@mui/icons-material/PersonPin';

export function ContactListItem({ onContactInfo }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar
          sx={{
            color: '#EFE7D6',
            backgroundColor: '#57AAA2',
          }}
        >
          <PersonPinIcon />
        </Avatar>
      </ListItemAvatar>
      <Typography
        sx={{
          m: 1,
          color: '#57AAA2',
          fontFamily: 'Explora',
          fontWeight: 600,
          fontSize: 17,
          letterSpacing: '.1rem',
        }}
      >
        {onContactInfo.name}: {onContactInfo.number}
      </Typography>
      <IconButton
        edge="end"
        aria-label="delete"
        sx={{
          color: '#57AAA2',
          boxShadow: ' 0 2.8px 2.2px rgba(0, 0, 0, 0.034)',
        }}
        disabled={isLoading}
        onClick={() => dispatch(deleteContact(onContactInfo.id))}
      >
        {isLoading ? <AutoDeleteIcon /> : <DeleteIcon />}
      </IconButton>
    </ListItem>
  );
}
ContactListItem.propTypes = {
  onContactInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

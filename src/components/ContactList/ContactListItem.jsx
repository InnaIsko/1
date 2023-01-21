import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Contact, BtnDelite, ContactItem } from './ContactListItem.styled';
import { deleteContact } from 'redux/operations';
import { selectIsLoading } from 'redux/selectors';

export function ContactListItem({ onContactInfo }) {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  return (
    <ContactItem>
      <Contact>
        {onContactInfo.name}: {onContactInfo.phone}
      </Contact>
      <BtnDelite
        disabled={isLoading}
        onClick={() => dispatch(deleteContact(onContactInfo.id))}
      >
        {isLoading ? 'Delete...' : 'Delete'}
      </BtnDelite>
    </ContactItem>
  );
}
ContactListItem.propTypes = {
  onContactInfo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

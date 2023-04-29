import PropTypes from 'prop-types';
import { ContactContainer } from './Contact.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <ContactContainer>
      {name}: {number}
      <button type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </ContactContainer>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;

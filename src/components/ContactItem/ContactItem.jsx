import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import PropTypes from 'prop-types';

import {
  ContactItemContainer,
  ContactText,
  DeleteItemBtn,
} from 'components/ContactItem/ContactItem.styled';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <ContactItemContainer>
      <ContactText>
        {name}: {phone}
      </ContactText>
      <DeleteItemBtn type="button" onClick={() => dispatch(deleteContact(id))}>
        Delete
      </DeleteItemBtn>
    </ContactItemContainer>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default ContactItem;

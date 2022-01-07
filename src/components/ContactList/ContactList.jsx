import PropTypes from 'prop-types';

import {
  BtnDelete,
  ContactsList,
  Contact,
  ContactData,
} from './ContactList.styled';

export default function ContactList({ contacts, onClick }) {
  return (
    <ContactsList>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id}>
          <ContactData>{name}</ContactData>
          <ContactData>{number}</ContactData>
          <BtnDelete type="button" onClick={() => onClick(id)}>
            Delete
          </BtnDelete>
        </Contact>
      ))}
    </ContactsList>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onClick: PropTypes.func,
};

import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem';
import styles from './styles.module.css';

const ContactsList = ({ contacts, onClick }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ name, number, id }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          onClick={() => onClick(id)}
        />
      ))}
      ;
    </ul>
  );
};

ContactsList.propTypes = {
  onClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;

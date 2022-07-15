import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const ContactsList = ({ contacts, onClick }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ name, id, number }) => (
        <li key={id}>
          {name}: {number}
          <button className={styles.btn} onClick={() => onClick(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  onClick: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactsList;

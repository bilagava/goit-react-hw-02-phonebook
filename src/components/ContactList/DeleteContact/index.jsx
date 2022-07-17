import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const DeleteContact = ({ id, onClick }) => {
  return (
    <button className={styles.btn} onClick={() => onClick(id)}>
      Delete
    </button>
  );
};

DeleteContact.propTypes = {
  id: PropTypes.string,
};

export default DeleteContact;

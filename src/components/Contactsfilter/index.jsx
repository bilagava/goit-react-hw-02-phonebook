import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

const Contactsfilter = ({ onChangeFilter, valueFilter }) => {
  return (
    <label className={styles.label}>
      Find contacts by name
      <input
        className={styles.input}
        onChange={onChangeFilter}
        value={valueFilter}
        type="text"
      />
    </label>
  );
};

Contactsfilter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  valueFilter: PropTypes.string.isRequired,
};

export default Contactsfilter;

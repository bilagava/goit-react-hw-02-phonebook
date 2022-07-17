import React from 'react';
import PropTypes from 'prop-types';
import DeleteContact from '../DeleteContact';

const ContactListItem = ({ name, number, id, onClick }) => {
  return (
    <li key={id}>
      {name}: {number}
      <DeleteContact onClick={() => onClick(id)} />
    </li>
  );
};

ContactListItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  number: PropTypes.string.isRequired,
};

export default ContactListItem;

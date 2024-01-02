import React from 'react';
import { FaEdit } from 'react-icons/fa';

const NewEditButton = ({ handleClick }) => (
  <button onClick={handleClick}>
    <FaEdit className="text-blue-500" />
  </button>
);

export default NewEditButton;

import React from 'react';
import ActionCell from './ActionCell.jsx';

const ButtonCell = ({ disabled, handleClick, children }) => (
  <ActionCell>
    <button
      className="bg-blue-600 text-white rounded hover:bg-blue-700 px-3"
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  </ActionCell>
);

export default ButtonCell;

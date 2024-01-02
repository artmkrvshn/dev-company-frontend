import React from 'react';

const InputCell = ({ value, placeholder, onChange }) => (
  <td className="px-5 py-1">
    <input
      className="bg-inherit w-full h-full !outline-none"
      value={value}
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  </td>
);

export default InputCell;

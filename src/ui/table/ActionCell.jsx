import React from 'react';

const ActionCell = ({ children }) => (
  <td>
    <div className="flex justify-around items-center">{children}</div>
  </td>
);

export default ActionCell;

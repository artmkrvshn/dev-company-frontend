import React from 'react';

const Table = ({ children }) => (
  <table className="w-full shadow-md bg-gray-200 table-auto">
    {children}
  </table>
);

export default Table;

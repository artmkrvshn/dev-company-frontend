import React from 'react';

const TableHeader = ({ children }) => (
  <thead className="uppercase">
    <tr>{children}</tr>
  </thead>
);

export default TableHeader;

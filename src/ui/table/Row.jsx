import React from 'react';

const Row = ({ key, children }) => (
  <tr key={key} className="bg-white border-y hover:bg-gray-100 leading-8">{children}</tr>
);

export default Row;

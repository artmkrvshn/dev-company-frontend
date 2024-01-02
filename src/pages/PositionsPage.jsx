import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import PositionTable from '../components/position/PositionTable.jsx';
import { PositionsContext } from '../contexts/PositionsContext.js';
import { getAll } from '../service/position.service.js';
import ErrorMessage from '../ui/ErrorMessage.jsx';

export const PositionsPage = () => {
  const loaderData = useLoaderData();
  const [positions, setPositions] = useState(loaderData);
  const [error, setError] = useState('');

  return (
    <PositionsContext.Provider
      value={{ positions, setPositions, error, setError }}
    >
      <PositionTable data={positions} />

      {error && <ErrorMessage message={error} />}
    </PositionsContext.Provider>
  );
};

export const positionsLoader = async () => {
  return await getAll().then((res) => res.data);
};

import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import StatusTable from '../components/status/StatusTable.jsx';
import { StatusesContext } from '../contexts/StatusesContext.js';
import { getAll } from '../service/status.service.js';
import ErrorMessage from '../ui/ErrorMessage.jsx';

export const StatusesPage = () => {
  const loaderData = useLoaderData();
  const [statuses, setStatuses] = useState(loaderData);
  const [error, setError] = useState('');

  return (
    <StatusesContext.Provider
      value={{ statuses, setStatuses, error, setError }}
    >
      <StatusTable data={statuses} />

      {error && <ErrorMessage message={error} />}
    </StatusesContext.Provider>
  );
};

export const statusesLoader = async () => {
  return await getAll().then((res) => res.data);
};

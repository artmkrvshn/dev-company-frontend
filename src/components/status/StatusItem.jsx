import { useState } from 'react';
import {
  StatusesContext,
  useStatusesContext,
} from '../../contexts/StatusesContext.js';
import StatusRow from './StatusRow.jsx';
import StatusUpdateRow from './StatusUpdateRow.jsx';

const StatusItem = ({ status }) => {
  const contextData = useStatusesContext();
  const [editMode, setEditMode] = useState(false);

  return (
    <StatusesContext.Provider
      value={{
        ...contextData,
        status,
        setEditMode,
      }}
    >
      {editMode ? <StatusUpdateRow /> : <StatusRow />}
    </StatusesContext.Provider>
  );
};

export default StatusItem;

import { useState } from 'react';
import {
  PositionsContext,
  usePositionsContext,
} from '../../contexts/PositionsContext.js';
import PositionRow from './PositionRow.jsx';
import PositionUpdateRow from './PositionUpdateRow.jsx';

const PositionItem = ({ position }) => {
  const contextData = usePositionsContext();
  const [editMode, setEditMode] = useState(false);

  return (
    <PositionsContext.Provider
      value={{
        ...contextData,
        position,
        setEditMode,
      }}
    >
      {editMode ? <PositionUpdateRow /> : <PositionRow />}
    </PositionsContext.Provider>
  );
};

export default PositionItem;

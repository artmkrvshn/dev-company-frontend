import { useState } from 'react';
import {
  DepartmentsContext,
  useDepartmentsContext,
} from '../../contexts/DepartmentsContext.js';
import DepartmentRow from './DepartmentRow.jsx';
import DepartmentUpdateRow from './DepartmentUpdateRow.jsx';

const DepartmentItem = ({ department }) => {
  const contextData = useDepartmentsContext();
  const [editMode, setEditMode] = useState(false);

  return (
    <DepartmentsContext.Provider
      value={{
        ...contextData,
        department,
        setEditMode,
      }}
    >
      {editMode ? <DepartmentUpdateRow /> : <DepartmentRow />}
    </DepartmentsContext.Provider>
  );
};

export default DepartmentItem;

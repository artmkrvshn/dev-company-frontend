import { useDepartmentsContext } from '../../contexts/DepartmentsContext.js';
import { useEffect, useState } from 'react';
import { editById } from '../../service/department.service.js';
import AcceptButton from '../../ui/button/AcceptButton.jsx';
import DeclineButton from '../../ui/button/DeclineButton.jsx';
import ActionCell from '../../ui/table/ActionCell.jsx';
import EditableRow from '../../ui/table/EditableRow.jsx';
import InputCell from '../../ui/table/InputCell.jsx';

const DepartmentUpdateRow = () => {
  const { department, departments, setDepartments, setError, setEditMode } =
    useDepartmentsContext();
  const { id, name } = department;
  const [newName, setNewName] = useState(name);

  useEffect(() => {
    setError('');
    setNewName(name);
  }, [name, setError, setNewName]);

  const handleAccept = async () => {
    if (name !== newName) {
      await editById(id, newName)
        .then(() => {
          const updatedDepartments = departments.map((item) => {
            if (item.id === id) {
              return { ...item, name: newName };
            }
            return item;
          });
          setDepartments(updatedDepartments);
        })
        .catch((error) => {
          console.error('Caught error in useHandleUpdate:\n', error);
          setError(
            error.response?.data?.errors?.['name'] ||
              error.response?.data?.detail ||
              'An error occurred.',
          );
        });
    }
    setEditMode(false);
  };

  const handleDecline = () => {
    setEditMode(false);
  };

  return (
    <EditableRow>
      <InputCell
        value={newName}
        placeholder="Name"
        onChange={(e) => setNewName(e.target.value)}
      ></InputCell>

      <ActionCell>
        <AcceptButton onClick={handleAccept} />
        <DeclineButton onClick={handleDecline} />
      </ActionCell>
    </EditableRow>
  );
};

export default DepartmentUpdateRow;

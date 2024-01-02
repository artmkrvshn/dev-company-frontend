import { useDepartmentsContext } from '../../contexts/DepartmentsContext.js';
import { useState } from 'react';
import { create } from '../../service/department.service.js';
import Row from '../../ui/table/Row.jsx';
import InputCell from '../../ui/table/InputCell.jsx';
import ButtonCell from '../../ui/table/ButtonCell.jsx';

const DepartmentCreateRow = () => {
  const { departments, setDepartments, setError } = useDepartmentsContext();
  const [newName, setNewName] = useState('');

  const handleSubmit = async () => {
    if (!newName) {
      setError('Name is required');
      return;
    }
    await create(newName)
      .then((response) => {
        const data = response.data;
        const department = { id: data.id, name: data.name };
        setDepartments([...departments, department]);
        setNewName('');
        setError('');
      })
      .catch((error) => {
        console.error('Caught error in useHandleCreate:\n', error);
        setError(
          error.response?.data?.errors?.['name'] ||
            error.response?.data?.detail ||
            'An error occurred.',
        );
      });
  };

  return (
    <Row>
      <InputCell
        value={newName}
        placeholder="Name"
        onChange={(e) => setNewName(e.target.value)}
      />
      <ButtonCell handleClick={handleSubmit}>Create</ButtonCell>
    </Row>
  );
};

export default DepartmentCreateRow;

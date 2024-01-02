import { useDepartmentsContext } from '../../contexts/DepartmentsContext.js';
import { deleteById } from '../../service/department.service.js';
import Row from '../../ui/table/Row.jsx';
import TextCell from '../../ui/table/TextCell.jsx';
import ActionCell from '../../ui/table/ActionCell.jsx';
import NewEditButton from '../../ui/table/NewEditButton.jsx';
import DeleteButton from '../../ui/button/DeleteButton.jsx';

const DepartmentRow = () => {
  const { department, departments, setDepartments, setError, setEditMode } =
    useDepartmentsContext();
  const { id, name } = department;

  const handleDelete = async () => {
    setError('');
    await deleteById(id)
      .then(() => {
        setDepartments([...departments].filter((i) => i.id !== id));
      })
      .catch((error) => {
        console.error('Caught error in useHandleDelete:\n', error);
        setError(error.response?.data?.message || 'An error occurred.');
      });
  };

  return (
    <Row>
      <TextCell>{name}</TextCell>
      <ActionCell>
        <NewEditButton handleClick={() => setEditMode(true)} />
        <DeleteButton handleClick={handleDelete} />
      </ActionCell>
    </Row>
  );
};

export default DepartmentRow;

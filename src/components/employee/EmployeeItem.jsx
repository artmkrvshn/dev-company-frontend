import useHandleDelete from './useHandleDelete.js';
import Row from '../../ui/table/Row.jsx';
import TextCell from '../../ui/table/TextCell.jsx';
import ActionCell from '../../ui/table/ActionCell.jsx';
import ViewButton from '../../ui/button/ViewButton.jsx';
import EditButton from '../../ui/button/EditButton.jsx';
import DeleteButton from '../../ui/button/DeleteButton.jsx';

const EmployeeItem = ({ employee }) => {
  const { id, name, surname, salary, email } = employee;
  const handleDelete = useHandleDelete();

  return (
    <Row>
      <TextCell>{name}</TextCell>
      <TextCell>{surname}</TextCell>
      <TextCell>${salary}</TextCell>
      <TextCell>{email}</TextCell>
      <ActionCell>
        <ViewButton link={`/employees/${id}`} />
        <EditButton link={`/employees/update/${id}`} />
        <DeleteButton handleClick={() => handleDelete(id)} />
      </ActionCell>
    </Row>
  );
};

export default EmployeeItem;

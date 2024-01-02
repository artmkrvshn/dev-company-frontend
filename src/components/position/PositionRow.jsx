import { usePositionsContext } from '../../contexts/PositionsContext.js';
import { deleteById } from '../../service/position.service.js';
import Row from '../../ui/table/Row.jsx';
import TextCell from '../../ui/table/TextCell.jsx';
import ActionCell from '../../ui/table/ActionCell.jsx';
import NewEditButton from '../../ui/table/NewEditButton.jsx';
import DeleteButton from '../../ui/button/DeleteButton.jsx';

const PositionRow = () => {
  const { position, positions, setPositions, setError, setEditMode } =
    usePositionsContext();
  const { id, name } = position;

  const handleDelete = async () => {
    setError('');
    await deleteById(id)
      .then(() => {
        setPositions([...positions].filter((i) => i.id !== id));
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

export default PositionRow;

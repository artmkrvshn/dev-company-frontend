import { usePositionsContext } from '../../contexts/PositionsContext.js';
import { useState } from 'react';
import { create } from '../../service/position.service.js';
import Row from '../../ui/table/Row.jsx';
import InputCell from '../../ui/table/InputCell.jsx';
import ButtonCell from '../../ui/table/ButtonCell.jsx';

const PositionCreateRow = () => {
  const { positions, setPositions, setError } = usePositionsContext();
  const [newName, setNewName] = useState('');

  const handleSubmit = async () => {
    if (!newName) {
      setError('Name is required');
      return;
    }
    await create(newName)
      .then((response) => {
        const data = response.data;
        const position = { id: data.id, name: data.name };
        setPositions([...positions, position]);
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

export default PositionCreateRow;

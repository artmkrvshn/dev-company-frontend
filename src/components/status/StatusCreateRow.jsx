import { useStatusesContext } from '../../contexts/StatusesContext.js';
import { useState } from 'react';
import { create } from '../../service/status.service.js';
import Row from '../../ui/table/Row.jsx';
import InputCell from '../../ui/table/InputCell.jsx';
import ButtonCell from '../../ui/table/ButtonCell.jsx';

const StatusCreateRow = () => {
  const { statuses, setStatuses, setError } = useStatusesContext();
  const [newName, setNewName] = useState('');

  const handleSubmit = async () => {
    if (!newName) {
      setError('Name is required');
      return;
    }
    await create(newName)
      .then((response) => {
        const data = response.data;
        const status = { id: data.id, name: data.name };
        setStatuses([...statuses, status]);
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

export default StatusCreateRow;

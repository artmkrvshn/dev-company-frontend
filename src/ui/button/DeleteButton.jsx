import { FaTrash } from 'react-icons/fa';

const DeleteButton = ({ handleClick }) => (
  <button className="text-red-500" onClick={handleClick}>
    <FaTrash />
  </button>
);

export default DeleteButton;

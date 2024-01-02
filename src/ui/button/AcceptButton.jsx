import { FaCheck } from 'react-icons/fa';

const AcceptButton = ({ onClick }) => (
  <button onClick={onClick}>
    <FaCheck className="text-green-500" />
  </button>
);

export default AcceptButton;

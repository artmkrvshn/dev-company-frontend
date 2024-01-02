import { FaX } from 'react-icons/fa6';

const DeclineButton = ({ onClick }) => (
  <button onClick={onClick}>
    <FaX className="text-red-500" />
  </button>
);

export default DeclineButton;

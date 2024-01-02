import { Link } from 'react-router-dom';
import { FaEye } from 'react-icons/fa';

const ViewButton = ({ link }) => (
  <Link to={link}>
    <FaEye className="text-blue-500" />
  </Link>
);

export default ViewButton;

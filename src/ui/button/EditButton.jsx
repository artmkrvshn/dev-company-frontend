import { FaEdit } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EditButton = ({ link }) => (
  <Link to={link}>
    <FaEdit className="text-blue-500" />
  </Link>
);

export default EditButton;

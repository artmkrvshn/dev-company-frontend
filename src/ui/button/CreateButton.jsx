import { Link } from 'react-router-dom';

const CreateButton = ({ link, children }) => (
  <Link to={`${link}`}>
    <button className="inline-block px-5 py-1 text-white bg-indigo-600 border-2 border-indigo-600 rounded-lg transition duration-150 active:text-indigo-500 hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring">
      {children}
    </button>
  </Link>
);

export default CreateButton;

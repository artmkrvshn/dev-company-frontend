import { useNavigate, useRouteError } from 'react-router-dom';
import Header from './Header.jsx';

const Error = () => {
  const navigate = useNavigate();
  const error = useRouteError();
  console.log(error);

  return (
    <div className="h-screen bg-blue-100">
      <Header />

      <div className="flex justify-center">
        <div>
          <div className="font-bold text-xl">Something went wrong</div>
          <div>Code: {error.status}</div>
          <div>Message: {error.error.message}</div>
          <button
            className="px-5 py-1 border-2 rounded transition duration-150 text-white bg-gray-500 border-gray-500 hover:bg-transparent hover:text-gray-500"
            onClick={() => navigate(-1)}>&larr; Go back</button>
        </div>
      </div>
    </div>
  );
};

export default Error;

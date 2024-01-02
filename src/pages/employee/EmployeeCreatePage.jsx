import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { getAll as getAllDepartments } from '../../service/department.service.js';
import { getAll as getAllPositions } from '../../service/position.service.js';
import { create } from '../../service/employee.service.js';

const EmployeeCreatePage = () => {
  const navigate = useNavigate();
  const loader = useLoaderData();
  const { departments, positions } = loader;

  const initialState = {
    name: '',
    surname: '',
    salary: '',
    email: '',
    password: '',
    department: null,
    position: null,
  };

  const [requestData, setRequestData] = useState(initialState);
  const [error, setError] = useState({});

  console.log('requestData', requestData);

  return (
    <div className="max-w-sm mx-auto space-y-4">
      <div>
        <label className="block my-2 text-gray-900">Enter name</label>
        <input
          value={requestData.name}
          onChange={(e) =>
            setRequestData({ ...requestData, name: e.target.value })
          }
          className="bg-gray-50 border border-gray-300 rounded w-full px-2.5 py-1"
          placeholder="Name"
          required
        />
        <div className="text-sm text-red-500">{error?.errors?.['name']}</div>
      </div>

      <div>
        <label className="block my-2 text-gray-900">Enter surname</label>
        <input
          value={requestData.surname}
          onChange={(e) =>
            setRequestData({ ...requestData, surname: e.target.value })
          }
          className="bg-gray-50 border border-gray-300 rounded w-full px-2.5 py-1"
          placeholder="Surname"
          required
        />
        <div className="text-sm text-red-500">{error?.errors?.['surname']}</div>
      </div>

      <div>
        <label className="block my-2 text-gray-900">Enter surname</label>
        <input
          value={requestData.salary}
          onChange={(e) =>
            setRequestData({ ...requestData, salary: e.target.value })
          }
          className="bg-gray-50 border border-gray-300 rounded w-full px-2.5 py-1"
          placeholder="Salary"
          required
        />
        <div className="text-sm text-red-500">{error?.errors?.['salary']}</div>
      </div>

      <div>
        <label className="block my-2 text-gray-900">Enter email</label>
        <input
          value={requestData.email}
          onChange={(e) =>
            setRequestData({ ...requestData, email: e.target.value })
          }
          className="bg-gray-50 border border-gray-300 rounded w-full px-2.5 py-1"
          placeholder="Email"
          required
        />
        <div className="text-sm text-red-500">{error?.errors?.['email']}</div>
      </div>

      <div>
        <label className="block my-2 text-gray-900">Enter password</label>
        <input
          value={requestData.password}
          onChange={(e) =>
            setRequestData({ ...requestData, password: e.target.value })
          }
          className="bg-gray-50 border border-gray-300 rounded w-full px-2.5 py-1"
          placeholder="Password"
          required
        />
        <div className="text-sm text-red-500">
          {error?.errors?.['password']}
        </div>
      </div>

      <div>
        <label className="block my-2 text-gray-900">Select department</label>
        <Select
          value={requestData.department}
          onChange={(e) => setRequestData({ ...requestData, department: e })}
          getOptionValue={(e) => e.id}
          getOptionLabel={(e) => e.name}
          placeholder="Department"
          menuPlacement="auto"
          options={departments}
        />
      </div>

      <div>
        <label className="block my-2 text-gray-900">Select position</label>
        <Select
          value={requestData.position}
          onChange={(e) => setRequestData({ ...requestData, position: e })}
          getOptionValue={(e) => e.id}
          getOptionLabel={(e) => e.name}
          placeholder="Position"
          menuPlacement="auto"
          options={positions}
        />
      </div>

      <div className="text-sm text-red-500">
        {!error?.errors && error?.detail}
      </div>

      <div className="flex justify-center space-x-8">
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-1 border-2 rounded transition duration-150 text-white bg-gray-500 border-gray-500 hover:bg-transparent hover:text-gray-500"
        >
          Back &#8592;
        </button>

        <button
          onClick={() => {
            create(requestData)
              .then(() => {
                navigate('/projects');
              })
              .catch((res) => {
                setError(res.response.data);
              });
          }}
          className="px-5 py-1 border-2 rounded transition duration-150 text-white bg-indigo-600 border-indigo-600 hover:bg-transparent hover:text-indigo-600"
        >
          Save
        </button>
        <button
          className="px-5 py-1 border-2 rounded transition duration-150 text-white bg-red-600 border-red-600 hover:bg-transparent hover:text-red-600"
          onClick={() => setRequestData(initialState)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export const employeeCreatePageLoader = async () => ({
  departments: await getAllDepartments().then((res) => res.data),
  positions: await getAllPositions().then((res) => res.data),
});

export default EmployeeCreatePage;

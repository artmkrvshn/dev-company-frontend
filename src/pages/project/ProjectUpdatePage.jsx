import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { editById } from '../../service/project.service.js';
import Select from 'react-select';
import InputField from '../../ui/InputField.jsx';

const ProjectUpdatePage = () => {
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  const { project, statuses, employees } = loaderData;

  const initialState = {
    name: project.name,
    startDate: project.startDate,
    endDate: project.endDate,
    status: project.status,
    chief: project.chief?.id ? project.chief : undefined,
    employees: project.employees,
  };

  const [requestData, setRequestData] = useState(initialState);
  const [error, setError] = useState({});

  return (
    <div className="max-w-sm mx-auto space-y-4">
      <div>
        <label className="block my-2 text-gray-900">New name</label>
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
        <label className="block my-2 text-gray-900">New start date</label>
        <input
          onChange={(e) =>
            setRequestData({ ...requestData, startDate: e.target.value })
          }
          value={requestData.startDate}
          type="date"
          className="bg-gray-50 border border-gray-300 rounded w-full px-2.5 py-1"
          required
        />
        <div className="text-sm text-red-500">
          {error?.errors?.['startDate']}
        </div>
      </div>

      <div>
        <label className="block my-2 text-gray-900">New end date</label>
        <input
          onChange={(e) =>
            setRequestData({ ...requestData, endDate: e.target.value })
          }
          value={requestData.endDate}
          type="date"
          className="bg-gray-50 border border-gray-300 rounded w-full px-2.5 py-1"
        />
        <div className="text-sm text-red-500">{error?.errors?.['endDate']}</div>
      </div>

      <div>
        <label className="block my-2 text-gray-900">Select new status</label>
        <Select
          onChange={(e) => setRequestData({ ...requestData, status: e })}
          value={requestData.status}
          getOptionValue={(e) => e.id}
          getOptionLabel={(e) => e.name}
          placeholder="Status"
          menuPlacement="auto"
          options={statuses}
        />
        <div className="text-sm text-red-500">{error?.errors?.['status']}</div>
      </div>

      <div>
        <label className="block my-2 text-gray-900">Select new chief</label>
        <Select
          onChange={(e) => setRequestData({ ...requestData, chief: e })}
          value={requestData.chief?.id ? requestData.chief : null}
          getOptionValue={(e) => e.id}
          getOptionLabel={(e) => `${e.name} ${e.surname}`}
          placeholder="Chief"
          isClearable={true}
          menuPlacement="auto"
          options={requestData.employees}
        />
        <div className="text-sm text-red-500">{error?.errors?.['chief']}</div>
      </div>

      <div>
        <label className="block my-2 text-gray-900">Select employees</label>
        <Select
          onChange={(e) => {
            const updatedData = { ...requestData, employees: e };
            if (!e.find((e) => e.id === requestData.chief?.id)) {
              updatedData.chief = null;
            }
            setRequestData(updatedData);
          }}
          value={requestData.employees}
          getOptionValue={(e) => e.id}
          getOptionLabel={(e) => `${e.name} ${e.surname}`}
          placeholder="Employees"
          isMulti={true}
          menuPlacement="auto"
          options={employees}
        />
        <div className="text-sm text-red-500">
          {error?.errors?.['employees']}
        </div>
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
            editById(project.id, requestData)
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
          onClick={() => setRequestData(project)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default ProjectUpdatePage;

import { useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { getAll as getAllEmployees } from '../../service/employee.service.js';
import { create } from '../../service/project.service.js';
import { getAll } from '../../service/status.service.js';

const ProjectCreatePage = () => {
  const navigate = useNavigate();
  const loader = useLoaderData();
  const { statuses, employees } = loader;

  const initialState = {
    name: '',
    startDate: '',
    endDate: '',
    status: statuses[0],
    chief: null,
    employees: [],
  };

  const [requestData, setRequestData] = useState(initialState);

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
        {/*<div className="">{error?.fields?.['name']}</div>*/}
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
            // if (!requestData.chief.id)
            //   setRequestData({ ...requestData, chief: null });
            create(requestData)
              .then((res) => {
                alert(res);
              })
              .catch((res) => {
                alert(res.data);
                // setError(res.data);
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

export const projectCreatePageLoader = async () => ({
  statuses: await getAll().then((res) => res.data),
  employees: await getAllEmployees().then((res) => res.data),
});

export default ProjectCreatePage;

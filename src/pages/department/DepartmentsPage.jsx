import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getAll } from '../../service/department.service.js';
import DepartmentTable from '../../components/department/DepartmentTable.jsx';
import { DepartmentsContext } from '../../contexts/DepartmentsContext.js';

export const DepartmentsPage = () => {
  const loaderData = useLoaderData();
  const [departments, setDepartments] = useState(loaderData);
  const [error, setError] = useState('');

  return (
    <DepartmentsContext.Provider
      value={{ departments, setDepartments, error, setError }}
    >
      <DepartmentTable data={departments} />
    </DepartmentsContext.Provider>
  );
};

export const departmentsLoader = async () => {
  return await getAll().then((res) => res.data);
};

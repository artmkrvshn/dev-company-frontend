import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { EmployeesContext } from '../../contexts/EmployeesContext.js';
import EmployeeTable from '../../components/employee/EmployeeTable.jsx';
import { getAll } from '../../service/employee.service.js';
import TableName from '../../ui/TableName.jsx';

export const EmployeesPage = () => {
  const loaderData = useLoaderData();
  const [employees, setEmployees] = useState(loaderData);

  return (
    <EmployeesContext.Provider value={{ employees, setEmployees }}>
      <TableName name="Employees" link="/employees/create" />
      <EmployeeTable data={employees} />
    </EmployeesContext.Provider>
  );
};

export const employeesLoader = async () => {
  return await getAll().then((res) => res.data);
};

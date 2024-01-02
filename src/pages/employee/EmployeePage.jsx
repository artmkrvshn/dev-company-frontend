import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { get } from '../../service/employee.service.js';
import { deleteById } from '../../service/employee.service.js';

const EmployeePage = () => {
  let navigate = useNavigate();
  const loaderData = useLoaderData();
  const { id, name, surname, salary, email, department, position } =
    loaderData.employee;

  return (
    <div className="">
      <div>
        <div className="font-bold text-xl py-2">{name + ' ' + surname}</div>
        <div>Name: {name}</div>
        <div>Surname: {surname}</div>
        <div>Salary: ${salary}</div>
        <div>Email: {email}</div>
        <div>Department: {department.name}</div>
        <div>Position: {position.name}</div>
      </div>

      {/*<Table>*/}
      {/*  <TableHeader>*/}
      {/*    <HeaderCell>Full Name</HeaderCell>*/}
      {/*    <HeaderCell>Email</HeaderCell>*/}
      {/*    <HeaderCell>Department</HeaderCell>*/}
      {/*    <HeaderCell>Position</HeaderCell>*/}
      {/*    <HeaderActionCell>Action</HeaderActionCell>*/}
      {/*  </TableHeader>*/}
      {/*<TableBody>*/}
      {/*  {employees.map((employee) => (*/}
      {/*    <Row>*/}
      {/*      <TextCell>{employee.name + ' ' + employee.surname}</TextCell>*/}
      {/*      <TextCell>{employee.email}</TextCell>*/}
      {/*      <TextCell>*/}
      {/*        {employee.department ? employee.department.name : '-'}*/}
      {/*      </TextCell>*/}
      {/*      <TextCell>{employee.position.name}</TextCell>*/}
      {/*      <ActionCell>*/}
      {/*        <ViewButton link={`/employees/${employee.id}`} />*/}
      {/*      </ActionCell>*/}
      {/*    </Row>*/}
      {/*  ))}*/}
      {/*</TableBody>*/}
      {/*</Table>*/}

      <Link to={`/employees/update/${id}`}>
        <button className="bg-blue-800 border-2 border-blue-800 text-white rounded-lg px-3 py-1 m-2 hover:text-blue-800 hover:bg-white hover:border-2 hover:border-blue-800">
          Edit
        </button>
      </Link>

      <button
        onClick={() => deleteById(id).then(() => navigate('/employees'))}
        className="bg-red-700 border-2 border-red-700 text-white rounded-lg px-3 py-1 m-2 hover:text-red-800 hover:bg-white hover:border-2 hover:border-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export const employeeLoader = async ({ params }) => ({
  employee: await get(params.id).then((res) => res.data),
});

export default EmployeePage;

import { FaExternalLinkAlt } from 'react-icons/fa';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { deleteById, get } from '../../service/project.service.js';
import { getAll } from '../../service/status.service.js';
import { getAll as getAllEmployees } from '../../service/employee.service.js';
import ViewButton from '../../ui/button/ViewButton.jsx';
import ActionCell from '../../ui/table/ActionCell.jsx';
import HeaderActionCell from '../../ui/table/HeaderActionCell.jsx';
import HeaderCell from '../../ui/table/HeaderCell.jsx';
import Row from '../../ui/table/Row.jsx';
import Table from '../../ui/table/Table.jsx';
import TableBody from '../../ui/table/TableBody.jsx';
import TableHeader from '../../ui/table/TableHeader.jsx';
import TextCell from '../../ui/table/TextCell.jsx';

const ProjectPage = () => {
  let navigate = useNavigate();
  const loaderData = useLoaderData();
  const project = loaderData.project;
  const { id, name, startDate, endDate, status, chief, employees } = project;

  console.log('loaderData', loaderData);

  console.log(project);

  return (
    <div className="">
      <div>
        <div className="font-bold text-xl py-2">{name}</div>
        <div>Start Date: {startDate}</div>
        <div>End Date: {endDate ?? '-'}</div>
        <div>Status: {status.name}</div>

        <div>
          <span>Chief: </span>
          {chief.id ? (
            <span>
              {chief.name + ' ' + chief.surname}
              <Link className="inline-block mx-2" to={`/employees/${chief.id}`}>
                <FaExternalLinkAlt />
              </Link>
            </span>
          ) : (
            <span>-</span>
          )}
        </div>
      </div>

      <Table>
        <TableHeader>
          <HeaderCell>Full Name</HeaderCell>
          <HeaderCell>Email</HeaderCell>
          <HeaderCell>Department</HeaderCell>
          <HeaderCell>Position</HeaderCell>
          <HeaderActionCell>Action</HeaderActionCell>
        </TableHeader>
        <TableBody>
          {employees.map((employee) => (
            <Row>
              <TextCell>{employee.name + ' ' + employee.surname}</TextCell>
              <TextCell>{employee.email}</TextCell>
              <TextCell>
                {employee.department ? employee.department.name : '-'}
              </TextCell>
              <TextCell>{employee.position.name}</TextCell>
              <ActionCell>
                <ViewButton link={`/employees/${employee.id}`} />
              </ActionCell>
            </Row>
          ))}
        </TableBody>
      </Table>

      <Link to={`/projects/update/${id}`}>
        <button className="bg-blue-800 border-2 border-blue-800 text-white rounded-lg px-3 py-1 m-2 hover:text-blue-800 hover:bg-white hover:border-2 hover:border-blue-800">
          Edit
        </button>
      </Link>

      <button
        onClick={() => deleteById(id).then(() => navigate('/projects'))}
        className="bg-red-700 border-2 border-red-700 text-white rounded-lg px-3 py-1 m-2 hover:text-red-800 hover:bg-white hover:border-2 hover:border-red-700"
      >
        Delete
      </button>
    </div>
  );
};

export const projectLoader = async ({ params }) => {
  return {
    project: await get(params.id).then((res) => res.data),
    statuses: await getAll().then((res) => res.data),
    employees: await getAllEmployees().then((res) => res.data),
  };
};

export default ProjectPage;

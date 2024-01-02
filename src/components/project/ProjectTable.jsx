import Table from '../../ui/table/Table.jsx';
import TableHeader from '../../ui/table/TableHeader.jsx';
import HeaderCell from '../../ui/table/HeaderCell.jsx';
import HeaderActionCell from '../../ui/table/HeaderActionCell.jsx';
import TableBody from '../../ui/table/TableBody.jsx';
import ProjectItem from "./ProjectItem.jsx";

const ProjectTable = ({ data }) => (
  <Table>
    <TableHeader>
      <HeaderCell>Name</HeaderCell>
      <HeaderCell>Start Date</HeaderCell>
      <HeaderCell>End Date</HeaderCell>
      <HeaderCell>Status</HeaderCell>

      <HeaderActionCell>Action</HeaderActionCell>
    </TableHeader>
    <TableBody>
      {data.map((item) => (
        <ProjectItem key={item.id} project={item} />
      ))}
    </TableBody>
  </Table>
);

export default ProjectTable;

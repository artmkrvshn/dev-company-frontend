import Table from '../../ui/table/Table.jsx';
import TableHeader from '../../ui/table/TableHeader.jsx';
import HeaderCell from '../../ui/table/HeaderCell.jsx';
import HeaderActionCell from '../../ui/table/HeaderActionCell.jsx';
import TableBody from '../../ui/table/TableBody.jsx';
import DepartmentItem from './DepartmentItem.jsx';
import DepartmentCreateRow from './DepartmentCreateRow.jsx';

const DepartmentTable = ({ data }) => (
  <Table>
    <TableHeader>
      <HeaderCell>Name</HeaderCell>
      <HeaderActionCell>Action</HeaderActionCell>
    </TableHeader>
    <TableBody>
      {data.map((item) => (
        <DepartmentItem key={item.id} department={item} />
      ))}
      <DepartmentCreateRow />
    </TableBody>
  </Table>
);

export default DepartmentTable;

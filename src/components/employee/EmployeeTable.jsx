import Table from '../../ui/table/Table.jsx';
import TableHeader from '../../ui/table/TableHeader.jsx';
import HeaderCell from '../../ui/table/HeaderCell.jsx';
import HeaderActionCell from '../../ui/table/HeaderActionCell.jsx';
import TableBody from '../../ui/table/TableBody.jsx';
import EmployeeItem from './EmployeeItem.jsx';

const EmployeeTable = ({ data }) => (
  <Table>
    <TableHeader>
      <HeaderCell>Name</HeaderCell>
      <HeaderCell>Surname</HeaderCell>
      <HeaderCell>Salary</HeaderCell>
      <HeaderCell>Email</HeaderCell>
      <HeaderActionCell>Action</HeaderActionCell>
    </TableHeader>
    <TableBody>
      {data.map((item) => (
        <EmployeeItem key={item.id} employee={item} />
      ))}
    </TableBody>
  </Table>
);

export default EmployeeTable;

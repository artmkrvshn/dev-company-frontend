import Table from '../../ui/table/Table.jsx';
import TableHeader from '../../ui/table/TableHeader.jsx';
import HeaderCell from '../../ui/table/HeaderCell.jsx';
import HeaderActionCell from '../../ui/table/HeaderActionCell.jsx';
import TableBody from '../../ui/table/TableBody.jsx';
import StatusItem from './StatusItem.jsx';
import StatusCreateRow from './StatusCreateRow.jsx';

const StatusTable = ({ data }) => (
  <Table>
    <TableHeader>
      <HeaderCell>Name</HeaderCell>
      <HeaderActionCell>Action</HeaderActionCell>
    </TableHeader>
    <TableBody>
      {data.map((item) => (
        <StatusItem key={item.id} status={item} />
      ))}
      <StatusCreateRow />
    </TableBody>
  </Table>
);

export default StatusTable;

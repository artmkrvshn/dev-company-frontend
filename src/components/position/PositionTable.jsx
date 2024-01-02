import Table from '../../ui/table/Table.jsx';
import TableHeader from '../../ui/table/TableHeader.jsx';
import HeaderCell from '../../ui/table/HeaderCell.jsx';
import HeaderActionCell from '../../ui/table/HeaderActionCell.jsx';
import TableBody from '../../ui/table/TableBody.jsx';
import PositionItem from './PositionItem.jsx';
import PositionCreateRow from './PositionCreateRow.jsx';

const PositionTable = ({ data }) => (
  <Table>
    <TableHeader>
      <HeaderCell>Name</HeaderCell>
      <HeaderActionCell>Action</HeaderActionCell>
    </TableHeader>
    <TableBody>
      {data.map((item) => (
        <PositionItem key={item.id} position={item} />
      ))}
      <PositionCreateRow />
    </TableBody>
  </Table>
);

export default PositionTable;

import CreateButton from './button/CreateButton.jsx';

const TableName = ({ name, link }) => (
  <div className="flex justify-between my-5">
    <div className="text-2xl">{name}</div>
    <CreateButton link={link}>Create</CreateButton>
  </div>
);

export default TableName;

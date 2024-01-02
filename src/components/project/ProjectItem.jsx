import DeleteButton from '../../ui/button/DeleteButton.jsx';
import EditButton from '../../ui/button/EditButton.jsx';
import ViewButton from '../../ui/button/ViewButton.jsx';
import ActionCell from '../../ui/table/ActionCell.jsx';
import Row from '../../ui/table/Row.jsx';
import TextCell from '../../ui/table/TextCell.jsx';
import useHandleDelete from './useHandleDelete.js';

const ProjectItem = ({ project }) => {
  const { id, name, startDate, endDate, status } = project;
  const handleDelete = useHandleDelete();

  return (
    <Row>
      <TextCell>{name}</TextCell>
      <TextCell>{startDate}</TextCell>
      <TextCell>{endDate}</TextCell>
      <TextCell>{status.name}</TextCell>
      <ActionCell>
        <ViewButton link={`/projects/${id}`} />
        <EditButton link={`/projects/update/${id}`} />
        <DeleteButton handleClick={() => handleDelete(id)} />
      </ActionCell>
    </Row>
  );
};

export default ProjectItem;

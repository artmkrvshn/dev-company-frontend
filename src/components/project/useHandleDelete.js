import { useProjectsContext } from '../../contexts/ProjectsContext.js';
import { deleteById } from '../../service/project.service.js';

const useHandleDelete = () => {
  const { projects, setProjects } = useProjectsContext();

  return async function (id) {
    await deleteById(id).then(() => {
      setProjects([...projects].filter((i) => i.id !== id));
    });
  };
};

export default useHandleDelete;

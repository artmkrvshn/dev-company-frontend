import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProjectTable from '../../components/project/ProjectTable.jsx';
import { ProjectsContext } from '../../contexts/ProjectsContext.js';
import { getAll } from '../../service/project.service.js';
import TableName from '../../ui/TableName.jsx';

export const ProjectsPage = () => {
  const loaderData = useLoaderData();
  const [projects, setProjects] = useState(loaderData);

  return (
    <ProjectsContext.Provider value={{ projects, setProjects }}>
      <TableName name="Projects" link="/projects/create" />
      <ProjectTable data={projects} />
    </ProjectsContext.Provider>
  );
};

export const projectsLoader = async () => {
  return await getAll().then((res) => res.data);
};

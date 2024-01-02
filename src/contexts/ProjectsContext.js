import { createContext, useContext } from 'react';

export const ProjectsContext = createContext(null);

export const useProjectsContext = () => useContext(ProjectsContext);

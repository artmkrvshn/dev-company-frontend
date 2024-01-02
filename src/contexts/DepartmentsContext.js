import { createContext, useContext } from 'react';

export const DepartmentsContext = createContext(null);

export const useDepartmentsContext = () => useContext(DepartmentsContext);

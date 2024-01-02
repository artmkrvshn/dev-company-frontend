import { createContext, useContext } from 'react';

export const EmployeesContext = createContext(null);

export const useEmployeesContext = () => useContext(EmployeesContext);

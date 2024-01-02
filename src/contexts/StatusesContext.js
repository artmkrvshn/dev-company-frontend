import { createContext, useContext } from 'react';

export const StatusesContext = createContext(null);

export const useStatusesContext = () => useContext(StatusesContext);

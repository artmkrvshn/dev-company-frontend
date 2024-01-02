import { createContext, useContext } from 'react';

export const PositionsContext = createContext(null);

export const usePositionsContext = () => useContext(PositionsContext);

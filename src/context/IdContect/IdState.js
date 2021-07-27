import { useReducer } from 'react';
import IdReducer from './IdReducer';
import IdContext from './IdContext';
import { ID_VERIFIED } from '../types';

const IdState = ({ children }) => {
  const initialState = {
    id_verified: false,
  };

  const [state, dispatch] = useReducer(IdReducer, initialState);

  const verifyID = () => dispatch({ type: ID_VERIFIED });

  return (
    <IdContext.Provider value={{ id_verified: state.id_verified, verifyID }}>
      {children}
    </IdContext.Provider>
  );
};

export default IdState;

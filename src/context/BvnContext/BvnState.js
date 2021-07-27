import { useReducer } from 'react';
import BvnReducer from './BvnReducer';
import BvnContext from './BvnContext';
import { BVN_VERIFIED } from './types';

const BvnState = ({ children }) => {
  const initialState = {
    bvn_verified: false,
  };

  const [state, dispatch] = useReducer(BvnReducer, initialState);

  const verifyBvn = () => dispatch({ type: BVN_VERIFIED });

  return (
    <BvnContext.Provider
      value={{ bvn_verified: state.bvn_verified, verifyBvn }}
    >
      {children}
    </BvnContext.Provider>
  );
};

export default BvnState;

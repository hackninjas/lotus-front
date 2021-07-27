import { ID_VERIFIED } from '../types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case ID_VERIFIED:
      return {
        ...state,
        id_verified: true,
      };
  }
};

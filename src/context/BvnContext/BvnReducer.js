import { BVN_VERIFIED } from './types';

// eslint-disable-next-line
export default (state, action) => {
  switch (action.type) {
    case BVN_VERIFIED:
      return {
        ...state,
        bvn_verified: true,
      };
  }
};

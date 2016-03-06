import { NAV_TO_NEXT_MAP } from '../constants/actionTypes';

export default (state = null, action) => {
  switch (action.type) {
    case NAV_TO_NEXT_MAP:
      if (state === action.max - 1) { return 0; }
      return state + 1;
    default:
      return state;
  }
};

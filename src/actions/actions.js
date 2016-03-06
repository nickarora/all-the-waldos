import * as types from '../constants/actionTypes';

export const navToNextMap = () => (dispatch, getState) => {
  const { maps } = getState();
  dispatch({ type: types.NAV_TO_NEXT_MAP, max: maps.length });
};

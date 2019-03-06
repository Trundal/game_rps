import * as actionTypes from './actionTypes';

export const toggleResults = () => {
  return {
      type: actionTypes.TOGGLE_RESULTS
  };
};

export const clearHistory = () => {
  return {
      type: actionTypes.CLEAR_HISTORY
  };
};

export const selectOption = (option) => {
  return {
      type: actionTypes.SELECT_OPTION,
      option: option
  };
};

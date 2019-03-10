import * as actionTypes from './actionTypes';

export const toggleResults = ():actionTypes.IToggleResults => {
  return {
      type: actionTypes.TOGGLE_RESULTS
  };
};

export const clearHistory = ():actionTypes.IClearHistory => {
  return {
      type: actionTypes.CLEAR_HISTORY
  };
};

export const selectOption = (option: string):actionTypes.ISelectOption => {
  return {
      type: actionTypes.SELECT_OPTION,
      option
  };
};
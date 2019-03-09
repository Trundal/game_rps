import * as actionTypes from './actionTypes';

export interface IToggleResults {
  type: actionTypes.TOGGLE_RESULTS;
}

export interface IClearHistory {
  type: actionTypes.CLEAR_HISTORY;
}

export interface ISelectOption {
  type: actionTypes.SELECT_OPTION;
  option: string;
}

export type gameActions = IToggleResults | IClearHistory | ISelectOption;


export const toggleResults = ():IToggleResults => {
  return {
      type: actionTypes.TOGGLE_RESULTS
  };
};

export const clearHistory = ():IClearHistory => {
  return {
      type: actionTypes.CLEAR_HISTORY
  };
};

export const selectOption = (option: string):ISelectOption => {
  return {
      type: actionTypes.SELECT_OPTION,
      option: option
  };
};
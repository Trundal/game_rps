export const APP_START = 'APP_START';
export type APP_START = typeof APP_START;
export interface IAppStart { type: APP_START;}

export type appActions = IAppStart;

export const TOGGLE_RESULTS = 'TOGGLE_RESULTS';
export type TOGGLE_RESULTS = typeof TOGGLE_RESULTS;
export interface IToggleResults {type: TOGGLE_RESULTS;}

export const CLEAR_HISTORY = 'CLEAR_HISTORY';
export type CLEAR_HISTORY = typeof CLEAR_HISTORY;
export interface IClearHistory {type: CLEAR_HISTORY;}

export const SELECT_OPTION = 'SELECT_OPTION';
export type SELECT_OPTION = typeof SELECT_OPTION;
export interface ISelectOption {type: SELECT_OPTION; option: string;}

export type gameActions = IToggleResults | IClearHistory | ISelectOption;

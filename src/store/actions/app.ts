import * as actionTypes from './actionTypes';

export interface IAppStart {
    type: actionTypes.APP_START;
}

export type appActions = IAppStart;

export const appStart = ():IAppStart => {
  return {
    type: actionTypes.APP_START
  };
};
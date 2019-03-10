import * as actionTypes from './actionTypes';

export const appStart = ():actionTypes.IAppStart => {
  return {
    type: actionTypes.APP_START
  };
}; 
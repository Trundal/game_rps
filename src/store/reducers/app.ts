import * as actionTypes from '../actions/actionTypes';
import * as storeState from './storeState';
import { updateObject } from '../utility';

const reducer = (
  state:storeState.IAppState = storeState.initialAppState, 
  action: actionTypes.appActions ):storeState.IAppState => 
  {
  switch (action.type) {
    case actionTypes.APP_START   : return updateObject(state, {started: true});
    default                      : return state;
  }
}

export default reducer;

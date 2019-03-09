import * as actionTypes from '../actions/actionTypes';
import { appActions } from '../actions/app'
import { updateObject } from '../utility';

const initialState = {
  started: false,
};

const reducer = (state = initialState, action: appActions ) => {
  switch (action.type) {
    case actionTypes.APP_START   : return updateObject(state, {started: true});
    default                      : return state;
  }
}

export default reducer;

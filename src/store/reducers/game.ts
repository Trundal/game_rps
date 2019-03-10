import * as actionTypes from '../actions/actionTypes';
import * as storeState from './storeState';
import { updateObject, random, whoWon } from '../utility';

const toggleResults = (state: storeState.IGameState):storeState.IGameState => {
  let newState = state;
  newState.results = !state.results
  return updateObject(state, newState);
};

const addToHistory = (state: storeState.IGameState, result: any):storeState.IGameState => {
  let newHistory = state.history;
  newHistory.push(result);
  return updateObject(state, newHistory);
};

const selectOption = (state: storeState.IGameState, action: { option: string } ):storeState.IGameState => {
  const computerSelection = state.options[random(3, 0)];
  const myResults={
    playerSelection: action.option,
    computerSelection: computerSelection,
    winner: whoWon(action.option, computerSelection)
  }
  let newState = state;
  addToHistory(newState, myResults);
  toggleResults(newState);
  return updateObject(state, newState);
};

const reducer = (
  state:storeState.IGameState = storeState.initialGameState, 
  action: actionTypes.gameActions):storeState.IGameState => 
{
  switch (action.type) {
    case actionTypes.TOGGLE_RESULTS   : return toggleResults(state);
    case actionTypes.CLEAR_HISTORY    : return updateObject(state, {results: false, history: []});
    case actionTypes.SELECT_OPTION    : return selectOption(state, action);
    default                           : return state;
  };
}

export default reducer;

import * as actionTypes from '../actions/actionTypes';
import { updateObject, random, whoWon } from '../utility';

const initialState = {
  results: false,
  options: ["Rock", "Paper", "Scissors"],
  history: []
};

const toggleResults = (state) => {
  let newState = state;
  newState.results = !state.results
  return updateObject(state, newState);
};

const addToHistory = (state, result) => {
  const newHistory = state.history;
  newHistory.push(result);
  return updateObject(state, newHistory);
};

const selectOption = (state, action) => {
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_RESULTS   : return toggleResults(state);
    case actionTypes.CLEAR_HISTORY    : return updateObject(state, {results: false, history: []});
    case actionTypes.SELECT_OPTION    : return selectOption(state, action);
    default                           : return state;
  };
}

export default reducer;

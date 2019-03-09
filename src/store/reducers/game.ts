import * as actionTypes from '../actions/actionTypes';
import { gameActions } from '../actions/game'
import { updateObject, random, whoWon } from '../utility';

interface IGameState {
  results: boolean,
  options: string[],
  history: any[]
}

const initialState: IGameState = {
  results: false,
  options: ["Rock", "Paper", "Scissors"],
  history: []
};

const toggleResults = (state: IGameState) => {
  let newState = state;
  newState.results = !state.results
  return updateObject(state, newState);
};

const addToHistory = (state: IGameState, result: any) => {
  let newHistory = state.history;
  newHistory.push(result);
  return updateObject(state, newHistory);
};

const selectOption = (state: IGameState, action: { option: string } ) => {
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

const reducer = (state = initialState, action: gameActions):IGameState => {
  switch (action.type) {
    case actionTypes.TOGGLE_RESULTS   : return toggleResults(state);
    case actionTypes.CLEAR_HISTORY    : return updateObject(state, {results: false, history: []});
    case actionTypes.SELECT_OPTION    : return selectOption(state, action);
    default                           : return state;
  };
}

export default reducer;

import React from 'react';

import styles from './Result.module.css';

interface IResult {
  result: {
    winner: string;
    playerSelection: string;
    computerSelection: string;
  } 
}

const Result = ( {result = { winner: "", playerSelection: "", computerSelection: "" } }: IResult ) => {

  return (
    <>
      <div className={ styles.highlight }>The winner is: <span>{ result.winner }</span></div>
      <div className={ styles.regular }>Your Choice: <span>{ result.playerSelection }</span></div>
      <div className={ styles.regular }>Computer Choice: <span>{ result.computerSelection }</span></div>
    </>
  );
}

export default Result;

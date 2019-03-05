import React from 'react';

import Button from '../components/UIElements/Button'
import styles from './Results.module.css';

const Results = ( { gameResults={}, replay, resetHistory } ) => {
  return (
    <div className={ styles.header} >
      <h2 className={ styles.title}>These are your results</h2>
      <div>The winner is: { gameResults[gameResults.length-1].winner }</div>
      <div>Your Choice: { gameResults[gameResults.length-1].playerSelection }</div>
      <div>Computer Choice: { gameResults[gameResults.length-1].computerSelection }</div>
      <Button text="Start new game" clicked={replay}/>
      <ul>
      { gameResults.map((option, index) =>
        index < gameResults.length-1 ?
          <li key={index}>
            <div>Game {index+1} results:</div>
            <div>The winner was: { option.winner }</div>
            <div>Your Choice: { option.playerSelection }</div>
            <div>Computer Choice: { option.computerSelection }</div>
          </li> :
          null
        )
      }
      </ul>
      <Button text="reset History" clicked={resetHistory}/>
    </div>
  );
}

export default Results;

import React from 'react';

import Button from '../components/UIElements/Button'
import styles from './Results.module.css';

const Results = ( { gameResults={}, replay, resetHistory } ) => {

  return (
    <div className={ styles.header}>
      <div className={ styles.result }>
        <h2 className={ styles.title}>The winner is: <span>{ gameResults[gameResults.length-1].winner }</span></h2>
        <div className={ styles.selection}>Your Choice: <span>{ gameResults[gameResults.length-1].playerSelection }</span></div>
        <div className={ styles.selection}>Computer Choice: <span>{ gameResults[gameResults.length-1].computerSelection }</span></div>
      </div>
      <Button text="Start new game" clicked={replay}/>
      {
        gameResults.length > 1 ?
          <div className={ styles.historyWrapper }>
            <ul className={ styles.gameHistory }>
            { gameResults.map((option, index) =>
              index < gameResults.length-1 ?
                <li key={index} className={ styles.history }>
                  <div className={ styles.faint }>Game {index+1} results:</div>
                  <div className={ styles.highlight }>The winner was: <span>{ option.winner }</span></div>
                  <div className={ styles.regular }>Your Choice: <span>{ option.playerSelection }</span></div>
                  <div className={ styles.regular }>Computer Choice: <span>{ option.computerSelection }</span></div>
                </li> :
                null
              )
            }
            </ul>
            <Button text="Reset History" clicked={resetHistory}/>
          </div> :
          null
      }

    </div>
  );
}

export default Results;

import React from 'react';

import Result from './Result'
import History from './History'
import Button from './UIElements/Button'
import styles from './Results.module.css';

const Results = ( { gameResults=[], replay, resetHistory } ) => {

  return (
    <div className={ styles.header}>
      <div className={ styles.result }>
        <Result result={gameResults[gameResults.length-1]} />
      </div>
      <Button text="Start new game" clicked={replay}/>
      {
        gameResults.length > 1 ?
          <div className={ styles.historyWrapper }>
            <History results={gameResults} />
            <Button text="Reset History" clicked={resetHistory}/>
          </div> :
          null
      }
    </div>
  );
}

export default Results;

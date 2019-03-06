import React from 'react';

import styles from './Result.module.css';

const Result = ( { result={} } ) => {

  return (
    <>
      <div className={ styles.highlight }>The winner is: <span>{ result.winner }</span></div>
      <div className={ styles.regular }>Your Choice: <span>{ result.playerSelection }</span></div>
      <div className={ styles.regular }>Computer Choice: <span>{ result.computerSelection }</span></div>
    </>
  );
}

export default Result;

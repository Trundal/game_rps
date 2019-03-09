import React from 'react';

import Result from './Result'
import styles from './History.module.css';

interface IResults {
  results: [
    {
      winner: string;
      playerSelection: string;
      computerSelection: string;
    }
  ] 
}

const History = ( { results=[{ winner: "", playerSelection: "", computerSelection: "" }] }:IResults ) => {

  return (
    <ul className={ styles.gameHistory }>
      { results.map((result, index: number) =>
        index < results.length-1 
        ?
          <li key={index} className={ styles.history }>
            <div className={ styles.faint }>Game {index+1} results:</div>
            <Result result={result} />
          </li> 
        :
          null
        )
      }
    </ul>
  );
}

export default History;

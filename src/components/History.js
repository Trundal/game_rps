import React from 'react';

import Result from './Result'
import styles from './History.module.css';

const History = ( { results=[] } ) => {

  return (
    <ul className={ styles.gameHistory }>
      { results.map((result, index) =>
        index < results.length-1 ?
          <li key={index} className={ styles.history }>
            <div className={ styles.faint }>Game {index+1} results:</div>
            <Result result={result} />
          </li> :
          null
        )
      }
    </ul>
  );
}

export default History;

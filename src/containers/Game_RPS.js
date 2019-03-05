import React, { useState } from 'react';

import Header from '../components/Header'
import Results from '../components/Results'
import Button from '../components/UIElements/Button'

import styles from './Game_RPS.module.css'

const Game_RPS = () => {
  const [results, setResults] = useState(false);
  const [history, setHistory] = useState([]);

  const options = ["Rock", "Paper", "Scissors"]

  const whoWon = (playerChoice="", computerChoice="") => {
    if (playerChoice === computerChoice) {
      return "tie";
    } else {
      switch (playerChoice) {
        case "Rock": {
          if(computerChoice === "Scissors") return "player"
          else return "computer"
        }
        case "Paper": {
          if(computerChoice === "Rock") return "player"
          else return "computer"
        }
        case "Scissors": {
          if(computerChoice === "Paper") return "player"
          else return "computer"
        }
        default: {
          return "error: unexpected results"
        }
      }
    }
  }

  const selectOption = (selection="") => {
    const computerSelection = options[Math.floor(Math.random() * 3)];
    let myHistory=history;
    myHistory.push({
      playerSelection: selection,
      computerSelection: computerSelection,
      winner: whoWon(selection, computerSelection)
    })
    setHistory(myHistory)
    setResults(true)
  }

  const replay = () => {
    setResults(false)
  }

  const resetHistory = () => {
    setHistory([])
    setResults(false)
  }

  return (
    <div className={ styles.main }>
      <Header />
      { results ?
        <Results
          gameResults={history}
          replay={() => replay()}
          resetHistory = {() => resetHistory()}
        /> :
        <>
          <div className={ styles.intro }>
            <p>Welcome to the classic game of Rock-Paper-Scissors!
            In this game, you can test your fate against the computer.
            Remember... Paper covers Rock, Rock crushes Scissors, Scissors cut Paper.
            Choose carefully!</p>
          </div>
          <div className={ styles.buttonBlock }>
            { options.map((option, index) =>
              <Button
                key={index}
                text={option}
                clicked={() => selectOption(option)}
              />
            )}
          </div>
        </>
      }
    </div>
  );

}

export default Game_RPS;

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actionTypes from '../store/actions/actionTypes';
import { toggleResults, clearHistory } from '../store/actions/index';
import Result from './Result'
import History from './History'
import Button from './UIElements/Button'
import styles from './Results.module.css';

interface Props {
  result?: { winner: string; playerSelection: string; computerSelection: string; },
  history: any,
  toggleResults: (option:string) => actionTypes.IToggleResults
  clearHistory: (option:string) => actionTypes.IClearHistory
}

interface gameProps {
  game: Props
}

class Results extends Component<Props> {
  render () {

    return (
      <div className={ styles.header}>
        <div className={ styles.result }>
          <Result result={this.props.history[this.props.history.length-1]} />
        </div>
        <Button text="Start new game" clicked={this.props.toggleResults}/>
        {
          this.props.history.length > 1 ?
            <div className={ styles.historyWrapper }>
              <History results={this.props.history} />
              <Button text="Reset History" clicked={this.props.clearHistory}/>
            </div> :
            null
        }
      </div>
    );
  }
}

const mapStateToProps = (state: gameProps) => {
	return {
    history: state.game.history
	}
}

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.gameActions>) => {
	return {
		toggleResults: () => dispatch(toggleResults()),
    clearHistory: () => dispatch(clearHistory())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);

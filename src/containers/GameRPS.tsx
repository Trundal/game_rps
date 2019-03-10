import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actionTypes from '../store/actions/actionTypes';
import { selectOption } from '../store/actions/index';
import Header from '../components/Header'
import Intro from '../components/Intro'
import Results from '../components/Results'
import Buttons from '../components/UIElements/Buttons'

import styles from './GameRPS.module.css'

interface Props {
  results: boolean,
  options: string[],
  selectOption: (option:string) => actionTypes.ISelectOption
}

interface gameProps {
  game: Props
}

class GameRPS extends Component<Props> {

  render () {

    return (
        <>
        <Header text="Welcome to: Rock Paper Scissors!"/>
        <div className={ styles.main }>
        { this.props.results ?
          <Results /> :
          <>
            <Intro />
            <Buttons buttons = {this.props.options} clicked={this.props.selectOption}/>
          </>
        }
        </div>
      </>
    );
  }

}

const mapStateToProps = (state: gameProps) => {
	return {
		results: state.game.results,
    options: state.game.options
	}
}

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.gameActions>) => {
	return {
    selectOption: (option: string) => dispatch(selectOption(option))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameRPS);

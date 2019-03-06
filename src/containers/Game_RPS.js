import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectOption } from '../store/actions/index';
import Header from '../components/Header'
import Intro from '../components/Intro'
import Results from '../components/Results'
import Button from '../components/UIElements/Button'

import styles from './Game_RPS.module.css'

class GameRPS extends Component {

    render () {

      return (
          <>
          <Header text="Welcome to: Rock Paper Scissors!"/>
          <div className={ styles.main }>
          { this.props.results
            ?
            <Results/>
            :
            <>
              <Intro />
              <div className={ styles.buttonBlock }>
                { this.props.options.map((option, index) =>
                  <Button
                    key={index}
                    text={option}
                    clicked={() => this.props.selectOption(option)}
                  />
                )}
              </div>
            </>
          }
          </div>
        </>
      );
    }

}

const mapStateToProps = state => {
	return {
		results: state.results,
    options: state.options
	}
}

const mapDispatchToProps = dispatch => {
	return {
    selectOption: (option) => dispatch(selectOption(option))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(GameRPS);

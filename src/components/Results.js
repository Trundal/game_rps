import React, { Component } from 'react';
import { connect } from 'react-redux';

import { toggleResults, clearHistory } from '../store/actions/index';
import Result from './Result'
import History from './History'
import Button from './UIElements/Button'
import styles from './Results.module.css';

class Results extends Component {
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

const mapStateToProps = state => {
	return {
    history: state.history
	}
}

const mapDispatchToProps = dispatch => {
	return {
		toggleResults: () => dispatch(toggleResults()),
    clearHistory: () => dispatch(clearHistory())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Results);

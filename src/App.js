import React, { Component } from 'react';
import { connect } from 'react-redux'

import { appStart } from './store/actions/index';
import GameRPS from './containers/Game_RPS'

export class App extends Component {

  componentDidMount() {
    this.props.onStart();
  }

  render() {
    if (!this.props.started) {
      return <span className="loading">Loading...</span>;
    }
    return (
      <div className="app">
        <GameRPS />
      </div>
    );
  }
}

const mapStateToProps = state => {
	return {
		started: state.app.started
	}
}

const mapDispatchToProps = dispatch => {
	return {
    onStart: () => dispatch(appStart())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
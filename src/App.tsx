import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import * as actionTypes from './store/actions/actionTypes';
import GameRPS from './containers/GameRPS'
import { appStart } from './store/actions';

interface Props {
  started: boolean
  onStart: () => void
}

interface AppProps {
  app: Props
}

export class App extends Component<Props> {

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

const mapStateToProps = (state:AppProps):{started: boolean} => {
	return {
		started: state.app.started
	}
}

const mapDispatchToProps = (dispatch: Dispatch<actionTypes.appActions>) => {
	return {
    onStart: () => dispatch(appStart())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

'use strict';

import React, { Component } from "react";
import {
  createStore,
  applyMiddleware,
  bindActionCreators
} from "redux";
import {
  Provider,
  connect
} from "react-redux";
import thunk from "redux-thunk";

import * as todoActions from "./app/redux/actions/Todo";
import * as counterActions from "./app/redux/actions/Counter";
import allReducers from "./app/redux/reducers";
import RootContainer from "./app/config/routes";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(allReducers);

const mapStateToProps = (state) => ({
  state: state.allReducers
});
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators({ todoActions, counterActions }, dispatch)
});
const ConnectedRoot = connect(mapStateToProps, mapDispatchToProps)(RootContainer);

class App extends Component {
  render() {
    const { state, actions } = this.props;
    return (
      <Provider
        store={store}>
        <ConnectedRoot />
      </Provider>
    );
  };
};

export default App;
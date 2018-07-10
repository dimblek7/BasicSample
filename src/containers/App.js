/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import Home from './home';
import { Actions, Router, Scene } from "react-native-router-flux";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
//Actions
import * as appActionCreator from "./../actions/application";
class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
        strTitle : "Sample Project by Narayan"
    };
}

componentDidMount() {
}
  render() {
    return (
      <Router backAndroidHandler={this.onBackPress}>
        <Scene key="root">
          <Scene
            key="home"
            component={Home}
            hideNavBar={true}
            title="Home"
            />
        </Scene>
        </Router>
    );
  }
}


const mapDispatchToProps = dispatch =>
    bindActionCreators(
        {
            ...appActionCreator
        },
        dispatch
    );

export default connect(null, mapDispatchToProps)(App);

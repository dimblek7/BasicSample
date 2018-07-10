import React, {Component} from 'react';
import Sample from '../components/home';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as appActionCreator from "./../actions/application";
class Home extends Component{

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
      <Sample title={this.state.strTitle}/>
    );
  }
}

const mapStateToProps = state => ({
    title: state.title
});
const mapDispatchToProps = dispatch => ({
    welcomeActions: bindActionCreators(appActionCreator, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
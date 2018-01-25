import React from 'react';
import { connect } from 'react-redux';
import { initialize } from '../actions/index';
import { bindActionCreators } from 'redux';

import CreateTopic from '../containers/create_topic';

class App extends React.Component {

  componentWillMount() {
    this.props.initialize();
  }

  render() {
    return (
      <div>
        <CreateTopic />
      </div>
    );
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initialize }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);

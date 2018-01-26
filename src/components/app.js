import React from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../actions/index';
import { bindActionCreators } from 'redux';

import CreateTopic from '../containers/create_topic';
import TopicList from '../containers/topic_list';

class App extends React.Component {

  componentWillMount() {
    this.props.fetchAll();
  }

  render() {
    return (
      <div>
        <CreateTopic />
        <TopicList />
      </div>
    );
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAll }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);

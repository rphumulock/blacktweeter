import React from 'react';
import { connect } from 'react-redux';
import { initializeTweets } from '../actions/index';
import { bindActionCreators } from 'redux';

import CreateTopic from '../containers/create_topic';
import TopicList from '../containers/topic_list';

class App extends React.Component {
  
  componentWillMount() {
    this.props.initializeTweets();
  }

  render() {
    return (
      <div className="container">
        <CreateTopic />
        <TopicList />
      </div>
    );
  };
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ initializeTweets: initializeTweets }, dispatch);
};

export default connect(null, mapDispatchToProps)(App);

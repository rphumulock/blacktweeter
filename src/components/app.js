import React from 'react';
import { connect } from 'react-redux';
import { fetchAll } from '../actions/index';
import { bindActionCreators } from 'redux';

import CreateTopic from '../containers/create_topic';
import TopicList from '../components/topic_list';

class App extends React.Component {

  render() {
    return (
      <div id="app">
        <TopicList />
      </div>
    );
  };
};

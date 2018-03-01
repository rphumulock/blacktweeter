import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Topic from '../containers/topic';

class TopicList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    renderTopics(topic) {
        return (
            <div className="row" key={topic.Key}>
                <Topic topic={topic} />
            </div >
        );
    };

    render() {
        return (
            <div className="container">
                {this.props.topics.map(this.renderTopics)}
            </div>
        );
    };
};

function mapStateToProps(state) {
    return {
        topics: state.topics
    };
};

export default connect(mapStateToProps)(TopicList);
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Topic from './topic';

class TopicList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            topics: []
        }
    };

    renderTopics(topic) {
        return (
            <div key={topic.key} className="row">
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
        topics: state.savedTopics
    };
};

export default connect(mapStateToProps)(TopicList);
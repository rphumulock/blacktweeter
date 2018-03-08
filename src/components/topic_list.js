import React from 'react';
import { Collapsible } from 'react-materialize'
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
            <Topic key={topic.Key} Topic={topic}  />
        );
    };

    render() {
        return (
            <div className="topic-list">
                <h6>TOPIC LIST</h6>
                <Collapsible popout accordion>
                    {this.props.topics.map(this.renderTopics)}
                </Collapsible>
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
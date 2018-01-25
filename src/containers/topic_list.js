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
            <div className="col-md-8" key={topic.key}>
                <Topic topic={topic} />
            </div >
        );
    };

    render() {
        return (
            <div className="row justify-content-md-center">
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

/*            <div className="row justify-content-md-center">
                {this.props.topics.map((topic) => {
                    this.alignment = !this.alignment;
                    if (this.alignment) {
                        this.renderTopics(topic, "col-md-8 push-left");
                    } else {
                        this.renderTopics(topic, 'col-md-8 push-right');
                    }
                })}
            </div>*/
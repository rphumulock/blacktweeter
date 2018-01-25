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

    renderTopics() {
        this.props.topics.forEach(() => {
            console.log('g');
        })
    };

    render() {
        return (
            <div>
                <button onClick={renderTopics}>click</button>
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


/*         return (

            
            <div key={topic.key}>
                <Topic topic={topic} />
            </div >
        );
        
        {this.props.topics.map(this.renderTopics)}*/
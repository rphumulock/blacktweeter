import React from 'react';
import { Collapsible } from 'react-materialize'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import InfiniteScroll from 'react-infinite-scroller';

import Topic from '../containers/topic';

class TopicList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topics: [],
            lastQuery: 0,
            hasMoreItems: true
        };
    }

    loadItems() {
        firebase.database().ref('Topics').orderByChild('Order').startAt(this.state.lastQuery).limitToFirst(2).on('value', (snapshot) => {
            let returnArr = [];
            snapshot.forEach((childSnapshot) => {
                let item = childSnapshot.val();
                item.Key = childSnapshot.key;
                returnArr.push(item);
            });
            this.setState({ topics: returnArr, lastQuery: this.state.lastQuery + 2 });
        });
    }

    renderTopics(topic) {
        return (
            <div key={topic.Key}></div>
        );
    };

    render() {
        const loader = <div className="loader">Loading ...</div>;

        return (
            <InfiniteScroll pageStart={0} loadMore={this.loadItems.bind(this)} hasMore={this.state.hasMoreItems} loader={loader}>
                <Collapsible popout accordion>
                    {this.props.topics.map(this.renderTopics)}
                </Collapsible>
            </InfiniteScroll>
        );
    }
};

/*    constructor(props) {
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

export default connect(mapStateToProps)(TopicList);*/
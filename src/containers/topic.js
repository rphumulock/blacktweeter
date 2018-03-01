import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TweetDetail from './tweet_detail';
import { pushTweet } from '../actions/index';
import firebase from '../config/firebase';


class Topic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.deleteTopic = this.deleteTopic.bind(this);
    };

    onInputChange(event) {
        this.setState({
            input: event.target.value
        });
    };

    onFormSubmit(event) {
        event.preventDefault();
        let id = this.state.input;
        let topic = this.props.topic;
        firebase.database().ref('Requests').push({
            type: 'CREATE_TWEET',
            topic: topic.Key,
            id: id
        });
        this.setState({ input: '' });
    };

    deleteTopic() {
        firebase.database().ref('Requests').push({
            type: 'DELETE_TOPIC',
            topic: this.props.topic.title
        })
    }

    renderTweet(Tweets) {
        if (Tweets) {
            const tweetsList = Object.keys(Tweets).map((key) => {
                console.log(Tweets[key])
                return <TweetDetail key={key} Object={Tweets[key]} />;
            });
            return (tweetsList);
        } else {
            return (<div>No Tweets for this Topic.</div>);
        };
    };

    render() {
        return (
            <div className="col s12">
                <div className="card z-depth-2">
                    <div className="card-content blue card-title white-text z-depth-2">{this.props.topic.Topic}</div>
                    <div className="card-content z-depth-2">
                        {this.renderTweet(this.props.topic.Tweets)}
                    </div>
                    <div className="row">
                        <div className="card-action">
                            <form className="col s12" onSubmit={this.onFormSubmit}>
                                <div className="row">
                                    <div className="input-field col s12">
                                        <input id="tweet" type="text" className="validate" value={this.state.input} onChange={this.onInputChange} />
                                        <label htmlFor="tweet">Enter Tweet ID</label>
                                        <button className="btn waves-effect waves-light blue" type="submit" name="action">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ pushTweet }, dispatch);
};

export default connect(null, mapDispatchToProps)(Topic);

/*     firebase.database().ref(`topics/${lowercase_topic}`).once("value", (snapShot) => {
            snapShot.ref.child(`tweets/${id}`).set({
                tweet: id
            });

            {this.props.topic.tweets.map((tweet) => this.renderTweet(tweet))}

            {this.props.topic.tweets.map((index) => this.renderTweet(index.tweet))}
        });
        
        key={object.tweet.id_str} tweet={object.tweet} replies={object.replies} topic={this.props.topic.title} 
        
        <div className="card">
                <i className="fa fa-times" onClick={this.deleteTopic} aria-hidden="true"></i>
                <div className="card-body">
                    <h5 className="card-title">{this.props.key}</h5>
                    <div className="card-body">
         
                    </div>
                </div>
                <div className="card-footer">
                    <form onSubmit={this.onFormSubmit} className="input-group">
                        <input
                            placeholder="Enter Tweet ID"
                            className="form-control"
                            value={this.state.input}
                            onChange={this.onInputChange}
                        />
                        <span className="input-group-btn">
                            <button type="submit" className="btn btn-primary">Fetch Tweet</button>
                        </span>
                    </form>
                </div>
            </div>
        
        
        
        
        */
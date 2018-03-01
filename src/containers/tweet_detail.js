import React from 'react';
import firebase from '../config/firebase';
import Modal from 'react-modal';

import Replies from './replies';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class TweetDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.deleteTweet = this.deleteTweet.bind(this);
    };

    deleteTweet() {
        /*firebase.database().ref('requests').push({
            type: 'DELETE_TWEET',
            topic: this.props.topic,
            id: this.props.tweet.id_str
        })*/
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card horizontal z-depth-2">
                            <div className="card-image blue z-depth-2">
                                <img className="profile-avatar z-depth-5" src={this.props.Object.Tweet.user.profile_image_url_https} alt="" />
                            </div>
                            <div className="card-stacked z-depth-2">
                                <div className="card-content">
                                    <div className="tweet-header">
                                        <p className="text-muted">{this.props.Object.Tweet.user.screen_name}@{this.props.Object.Tweet.user.name}</p>
                                    </div>
                                    <div className="tweet-details">
                                        <p>{this.props.Object.Tweet.text}</p>
                                        <Replies Replies={this.props.Object.Replies}/>
                                    </div>
                                    <div className="tweet-footer">
                                        <p>{this.props.Object.Tweet.created_at}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TweetDetail;
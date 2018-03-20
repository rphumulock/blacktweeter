/* Firebase */
import firebase from '../config/firebase';
/* React */
import React from 'react';
import Modal from 'react-modal';
import { Collapsible, CollapsibleItem } from 'react-materialize';
/* Vendor */
import moment from 'moment';
/* Custom */
import ReplyList from './reply_list';

class Tweet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.delete = this.delete.bind(this);
    };

    delete() {
        firebase.database().ref('Requests').push({
            type: 'DELETE_TWEET',
            topic: this.props.Topic,
            id: this.props.Key
        })
    }

    renderHeader() {
        return (
            <div className="tweet-header">
                <div className="tweet-block">
                    <ul className="tweet-list">
                        <li><img className="tweet-profile-avatar z-depth-5" src={this.props.Object.Tweet.user.profile_image_url_https} alt="" /></li>
                        <li>{moment().format('MMMM Do YYYY, h:mm:ss a', this.props.Object.Tweet.created_at)}</li>
                    </ul>
                </div>
            </div>
        );
    };

    render() {
        return (
            <CollapsibleItem header={this.renderHeader()} onSelect={this.props.onSelect}>
                <div className="row">
                    <div className="col s12">
                        <p><strong><a href="">{this.props.Object.Tweet.user.screen_name}</a></strong><small>@{this.props.Object.Tweet.user.name}</small></p>
                        <p className="tweet-text">{decodeURIComponent(this.props.Object.Tweet.text)}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col s11">
                        <ul className="tweet-list">
                            <li><ReplyList Replies={this.props.Object.Replies} /></li>
                            <li><a><i className="material-icons">repeat</i>{this.props.Object.Tweet.retweet_count}</a></li>
                            <li><a><i className="material-icons">favorite</i>{this.props.Object.Tweet.favorite_count}</a></li>
                        </ul>
                    </div>
                    <div className="col s1">
                        <form onSubmit={this.onOrderSubmit}>
                            <div className="input-field">
                                <input id="order" type="text" className="validate" value={this.state.orderInput} onChange={this.onOrderInput} />
                                <label htmlFor="tweet-order">{this.props.Tweet.Order}</label>
                            </div>
                        </form>
                        <a><i className="material-icons" onClick={this.delete}>delete</i></a>
                    </div>
                </div>
            </CollapsibleItem >
        );
    }
}

export default Tweet;
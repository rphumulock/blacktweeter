/* React */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Collapsible, CollapsibleItem } from 'react-materialize';
/* Vendor */
import moment from 'moment';
/* Custom */
import Topic from '../containers/topic';

class Reply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    renderHeader() {
        return (
            <div className="tweet-header">
                <div className="tweet-block">
                    <ul className="tweet-list">
                        <li><img className="tweet-profile-avatar z-depth-5" src={this.props.Reply.user.profile_image_url_https} alt="" /></li>
                        <li><strong><a href="">{this.props.Reply.user.screen_name}</a></strong><small>@{this.props.Reply.user.name}</small></li>
                    </ul>
                </div>
            </div>
        );
    };

    render() {
        return (
            <CollapsibleItem header={this.renderHeader()} onSelect={this.props.onSelect}>
                <div className="tweet-body">
                    <p>{decodeURIComponent(this.props.Reply.text)}</p>
                    <p><small>-{moment().format('MMMM Do YYYY, h:mm:ss a', this.props.Reply.created_at)}</small></p>
                    <div className="tweet-block">
                        <ul className="tweet-list">
                            <li><a><i className="material-icons">repeat</i>{this.props.Reply.retweet_count}</a></li>
                            <li><a><i className="material-icons">favorite</i>{this.props.Reply.favorite_count}</a></li>
                        </ul>
                    </div>
                </div>
            </CollapsibleItem >
        );
    };
};

export default Reply;
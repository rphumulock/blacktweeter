import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Topic from '../containers/topic';

class Reply extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card horizontal z-depth-3">
                            <div className="card-image">
                                <img className="profile-avatar" src={this.props.Reply.user.profile_image_url_https} alt="" />
                            </div>
                            <div className="card-stacked">
                                <div className="card-content">
                                    <div className="tweet-header">
                                        <p className="text-muted">{this.props.Reply.user.screen_name}@{this.props.Reply.id_str}</p>
                                    </div>
                                    <div className="tweet-details">
                                        <p>{this.props.Reply.text}</p>
                                    </div>
                                    <div className="tweet-footer">
                                        <p>{this.props.Reply.created_at}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default Reply;
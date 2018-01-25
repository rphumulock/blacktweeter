import React from 'react';

const TopicDetail = ({ topic }) => {
    if (!topic) {
        return <div className="topic-detail">No Current Topic</div>;
    }

    return (
        <div>{topic.key}</div>
    )
}

export default TopicDetail;
/*      <div className="topic-detail">
            <img className="profile-avatar" src={this.props.topic.Tweet.user.profile_image_url} alt="" />
            <div className="alert alert-light" role="alert">
                {this.props.topic.Tweet.text}
            </div>
            <div className="alert alert-light" role="alert">
                {this.props.topic.Tweet.created_at}<br />
                {this.props.topic.Tweet.user.name}<br />
                {this.props.topic.Tweet.user.location}<br />
            </div>
        </div>*/
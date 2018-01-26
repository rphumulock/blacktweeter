import React from 'react';

const TopicDetail = ({ topic }) => {
    if (!topic.Tweet) {
        return <div className="topic-detail">No Current Tweet</div>;
    }

    return (
        <div className="topic-detail">
            <p>{topic.Tweet.user.screen_name}</p>
            <img className="profile-avatar" src={topic.Tweet.user.profile_image_url_https} alt="" />
            <blockquote className="blockquote mb-0">
                <p>{topic.Tweet.text}</p>
                <footer className="blockquote-footer">
                    {topic.Tweet.user.location}<br />
                    {topic.Tweet.created_at}
                </footer>
            </blockquote>
        </div>
    )
}

export default TopicDetail;
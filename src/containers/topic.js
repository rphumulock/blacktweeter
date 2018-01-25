import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { saveTopic } from '../actions/index';

class Topic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ''
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);

    };

    onInputChange(event) {
        this.setState({
            input: event.target.value
        });
    };

    onFormSubmit(event) {
        event.preventDefault();
        this.props.saveTopic(this.state.input, this.props.topic);
        this.setState({ input: '' });
    };

    render() {
        return (
            <div className="topic">
                <div className="card">
                    <h4>{this.props.topic.Topic}</h4>
                    <div className="card-block">
                        <img className="profile-avatar" src={this.props.topic.Tweet.user.profile_image_url} alt="" />
                        <div className="alert alert-light" role="alert">
                            {this.props.topic.Tweet.text}
                        </div>
                        <div className="alert alert-light" role="alert">
                            {this.props.topic.Tweet.created_at}<br />
                            {this.props.topic.Tweet.user.name}<br />
                            {this.props.topic.Tweet.user.location}<br />
                        </div>
                    </div>
                    <div className="card-footer">
                        <form onSubmit={this.onFormSubmit} className="input-group">
                            <input
                                placeholder="Topic"
                                className="form-control"
                                value={this.state.input}
                                onChange={this.onInputChange}
                            />
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-secondary">Find Tweet</button>
                            </span>
                        </form>
                    </div>
                </div>
            </div >
        );
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ saveTopic: saveTopic }, dispatch);
};

export default connect(null, mapDispatchToProps)(Topic);
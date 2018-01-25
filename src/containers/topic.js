import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TopicDetail from './topic_detail';
import { pushTweet } from '../actions/index';

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
        this.props.pushTweet(this.state.input, this.props.topic.key);
        this.setState({ input: '' });
    };

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <div className="card-body">
                        <TopicDetail topic={this.props.topic} />
                    </div>
                </div>
                <div className="card-footer">
                    <div className="col-sm-6">
                        <form onSubmit={this.onFormSubmit} className="input-group">
                            <input
                                placeholder="Topic"
                                className="form-control"
                                value={this.state.input}
                                onChange={this.onInputChange}
                            />
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-primary">Find Tweet</button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ pushTweet }, dispatch);
};

export default connect(null, mapDispatchToProps)(Topic);
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { pushTopic } from '../actions/index';

class Topic extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            input: '',
            tweets: []
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
        this.props.pushTopic(this.state.input, this.props.topic);
        this.setState({ input: '' });
    };

    render() {
        return (
            <div className="topic row">
                <div className="card">
                    <div className="card-header">{this.props.topic}</div>
                    <div className="card-block">
                        
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

function mapStateToProps(state) {
    return {
        tweets: state.tweets
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ pushTopic: pushTopic }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Topic);
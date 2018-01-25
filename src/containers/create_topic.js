/* VENDOR */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/* USER */
import { pushTopic } from '../actions/index';

class CreateTopic extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            topic: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    };

    onInputChange(event) {
        this.setState({
            topic: event.target.value
        });
    };

    onFormSubmit(event) {
        event.preventDefault();
        this.props.pushTopic(this.state.topic);
        this.setState({ topic: '' });
    };

    render() {
        return (
            <div className="create-topic-container">
                <div className="jumbotron">
                    <div>
                        <form onSubmit={this.onFormSubmit} className="input-group">
                            <input
                                placeholder="Topic"
                                className="form-control"
                                value={this.state.topic}
                                onChange={this.onInputChange}
                            />
                            <span className="input-group-btn">
                                <button type="submit" className="btn btn-secondary">Create Topic</button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
        );
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ pushTopic }, dispatch);
};

export default connect(null, mapDispatchToProps)(CreateTopic);
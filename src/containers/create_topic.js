/* VENDOR */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
/* USER */
import { pushTopic } from '../actions/index';
import firebase from '../config/firebase';

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
        if (this.state.topic.length != 0) {
            this.createTopic(this.state.topic);
            this.setState({ topic: '' });
        }
    };

    createTopic(topic) {
        firebase.database().ref('Requests').push({
            type: 'CREATE_TOPIC',
            topic: topic
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card z-depth-2">
                            <div class="card-content blue card-title white-text z-depth-2">Create Topic</div>
                            <div className="row">
                                <div className="card-action">
                                    <form className="col s12" onSubmit={this.onFormSubmit}>
                                        <div className="row">
                                            <div className="input-field col s12">
                                                <input id="topic" type="text" className="validate" value={this.state.topic} onChange={this.onInputChange} />
                                                <label htmlFor="topic">Enter Topic Name</label>
                                                <button className="btn waves-effect waves-light blue" type="submit" name="action">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
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
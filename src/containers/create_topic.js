/* Firebase */
import firebase from '../config/firebase';
/* React */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Collapsible, CollapsibleItem } from 'react-materialize';
/* CUSTOM */
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

    renderHeader() {
        return (
            <div className="topic-header">
                <strong>CREATE TOPIC</strong>
            </div>
        );
    }

    render() {
        return (
            <div className="topic-creation">
                <h6>TOPIC CREATION</h6>
                <Collapsible popout accordion>
                    <CollapsibleItem header={this.renderHeader()} onSelect={this.props.onSelect}>
                        <div className="form">
                            <form onSubmit={this.onFormSubmit}>
                                <div className="input-field">
                                    <input id="topic" type="text" className="validate" value={this.state.topic} onChange={this.onInputChange} />
                                    <label htmlFor="topic">Enter Topic Name</label>
                                    <button className="btn waves-effect waves-light blue" type="submit" name="action">Submit</button>
                                </div>
                            </form>
                        </div>
                    </CollapsibleItem>
                </Collapsible>
            </div>
        );
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ pushTopic }, dispatch);
};

export default connect(null, mapDispatchToProps)(CreateTopic);
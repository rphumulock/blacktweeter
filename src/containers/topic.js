import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Collapsible, CollapsibleItem } from 'react-materialize';

import Tweet from './tweet';
import { pushTweet } from '../actions/index';
import firebase from '../config/firebase';

class Topic extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: ''
		};
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.delete = this.delete.bind(this);
	};

	onInputChange(event) {
		this.setState({
			input: event.target.value
		});
	};

	onFormSubmit(event) {
		event.preventDefault();
		let id = this.state.input;
		let topic = this.props.Topic;
		firebase.database().ref('Requests').push({
			type: 'CREATE_TWEET',
			topic: topic.Key,
			id: id
		});
		this.setState({ input: '' });
	};

	delete(event) {
		firebase.database().ref('Requests').push({
			type: 'DELETE_TOPIC',
			topic: this.props.Topic.Key
		})
	}

	mapTweets() {
		if (this.props.Topic.Tweets) {
			return Object.keys(this.props.Topic.Tweets).map((key) => {
				return (<Tweet key={key} Key={key} Object={this.props.Topic.Tweets[key]} Topic={this.props.Topic.Key} />);
			});
		}
	}

	renderTweets() {
		return (this.props.Topic.Tweets ? this.mapTweets() : (<div className="tweet-block">There are no tweets for this topic.</div>));
	};

	renderHeader() {
		return (
			<div className="topic-header">
				<strong>#{this.props.Topic.Topic}</strong>
			</div>
		);
	};

	render() {
		return (
			<CollapsibleItem header={this.renderHeader()} onSelect={this.props.onSelect}>
				<Collapsible popout accordion>
					{this.renderTweets()}
				</Collapsible>
				<div className="row">
					<div className="col s11">
						<form onSubmit={this.onFormSubmit}>
							<div className="input-field">
								<input id="tweet" type="text" className="validate" value={this.state.input} onChange={this.onInputChange} />
								<label htmlFor="tweet">Enter Tweet ID</label>
								<button className="btn waves-effect waves-light blue" type="submit" name="action">Submit</button>
							</div>
						</form>
					</div>
					<div className="col s1 vertical-align">
						<a><i className="material-icons" onClick={this.delete}>delete</i></a>
					</div>
				</div>
			</CollapsibleItem >
		);
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ pushTweet }, dispatch);
};

export default connect(null, mapDispatchToProps)(Topic);
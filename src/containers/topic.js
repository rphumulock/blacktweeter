/* Firebase */
import firebase from '../config/firebase';
/* React */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Collapsible, CollapsibleItem } from 'react-materialize';
/* Custom */
import Tweet from './tweet';

export default class Topic extends React.Component {
	constructor(props) {
		super(props);
		this.state = { tweetInput: '', orderInput: '' };
		this.onTweetInput = this.onTweetInput.bind(this);
		this.onOrderInput = this.onOrderInput.bind(this);
		this.onTweetSubmit = this.onTweetSubmit.bind(this);
		this.onOrderSubmit = this.onOrderSubmit.bind(this);
		this.delete = this.delete.bind(this);
	};

	onTweetInput(event) {
		this.setState({ tweetInput: event.target.value });
	};

	onOrderInput(event) {
		this.setState({ orderInput: event.target.value });
	};

	onOrderSubmit(event) {
		event.preventDefault();
		let oldOrder = this.props.Topic.Order;
		let newOrder = this.state.orderInput;
		let topic = this.props.Topic;
		firebase.database().ref('Requests').push({
			type: 'SET_ORDER',
			topic: topic.Key,
			oldOrder: oldOrder,
			newOrder: newOrder
		});
		this.setState({ orderInput: '' });
	};

	onTweetSubmit(event) {
		event.preventDefault();
		let id = this.state.tweetInput;
		let topic = this.props.Topic;
		firebase.database().ref('Requests').push({
			type: 'CREATE_TWEET',
			topic: topic.Key,
			id: id
		});
		this.setState({ tweetInput: '' });
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
				<strong>{this.props.Topic.Topic}</strong>
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
						<form onSubmit={this.onTweetSubmit}>
							<div className="input-field">
								<input id="tweet" type="text" className="validate" value={this.state.tweetInput} onChange={this.onTweetInput} />
								<label htmlFor="tweet">Enter Tweet ID</label>
								<button className="btn waves-effect waves-light blue" type="submit" name="action">Submit</button>
							</div>
						</form>
					</div>
					<div className="col s1 vertical-align">
						<form onSubmit={this.onOrderSubmit}>
							<div className="input-field">
								<input id="order" type="text" className="validate" value={this.state.orderInput} onChange={this.onOrderInput} />
								<label htmlFor="topic-order">{this.props.Topic.Order}</label>
							</div>
						</form>
						<a><i className="material-icons" onClick={this.delete}>delete</i></a>
					</div>
				</div>
			</CollapsibleItem >
		);
	};
}
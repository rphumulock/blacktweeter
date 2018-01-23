import { combineReducers } from 'redux';
import TopicReducer from '../reducers/reducer_topic';
import TweetReducer from '../reducers/reducer_tweet';

const rootReducer = combineReducers({
  topics: TopicReducer,
  tweets: TweetReducer
});

export default rootReducer;

import { combineReducers } from 'redux';
import topicReducer from '../reducers/reducer_topic';

const rootReducer = combineReducers({
  topics: topicReducer
});

export default rootReducer;

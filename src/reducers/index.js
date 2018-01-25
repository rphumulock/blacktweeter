import { combineReducers } from 'redux';
import localTopicReducer from '../reducers/local_topic_reducer';
import savedTopicReducer from '../reducers/saved_topic_reducer';

const rootReducer = combineReducers({
  localTopics: localTopicReducer,
  savedTopics: savedTopicReducer
});

export default rootReducer;

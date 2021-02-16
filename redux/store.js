import {createStore, combineReducers} from 'redux';
import eventReducer from './reducers/eventReducer';

const reducers = combineReducers({
	event: eventReducer
});

const init = {};

const store = createStore(reducers, init);

export default store;
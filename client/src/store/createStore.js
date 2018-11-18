import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';
import { createLogger } from 'redux-logger';

const log = createLogger({ diff: true, collapsed: true });

export default (initialState = {}) => {
	//store enhancers
	const enhancers = [];

	//store instantiation
	const store = createStore(
		makeRootReducer(),
		initialState,
		compose(
			applyMiddleware(thunk),
			applyMiddleware(log),
			...enhancers
		)
	);

	return store;
};
import { createStore } from 'redux';
const initialState = { counter: 0 };
const counterReducer = (state = initialState, action) => {
	if (action.type === 'add1') {
		return { counter: state.counter + 1 };
	}
	if (action.type === 'add10') {
		return { counter: state.counter + 10 };
	}
	if (action.type === 'sub1') {
		return { counter: state.counter - 1 };
	}
	if (action.type === 'sub10') {
		return { counter: state.counter - 10 };
	}

	return state;
};

const store = createStore(counterReducer);
export default store;

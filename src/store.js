import { createStore, combineReducers } from 'redux';
import { reducer } from './reducer';


const store = createStore(reducer);

export default store;

// If you ave multiple reducers

// const allReducers = combineReducers(reducer1,reducer2);
// const store=createStore(allReducers)

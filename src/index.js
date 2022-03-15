import store from "./store";
import * as action from './actions';

store.dispatch(action.bugAdded('BUG 1'));

// console.log(store)
console.log(store.getState())

store.dispatch(action.bugRemoved(6))
console.log(store.getState())
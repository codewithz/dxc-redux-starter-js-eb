import store from "./store";
import * as action from './actions';

store.dispatch(action.bugAdded('BUG 1'));
store.dispatch(action.bugAdded('BUG 2'));

// console.log(store)
console.log(store.getState())

store.dispatch(action.bugRemoved(6))
store.dispatch(action.bugResolved(7))
console.log(store.getState())
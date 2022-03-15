import store from "./store";
import * as actions from './actionTypes';

store.dispatch({
    type: actions.BUG_ADDED,
    payload: {
        description: 'Bug 1'
    }
});

// console.log(store)
console.log(store.getState())

store.dispatch({
    type: actions.BUG_REMOVED,
    payload: {
        id: 6
    }
})
console.log(store.getState())
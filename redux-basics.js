const redux = require('redux');

const oldState = {
    mangoes: 0
}


// Reducer
const rootReducer = (state = oldState,action) => {
    if(action.type === 'ADDMANGO') {
        return {
            ...state,
            mangoes: state.mangoes + action.value
        }
    }

    if(action.type === 'SUBTRACTMANGO') {
        return {
            ...state,
            mangoes: state.mangoes - action.value
        }
    }
    return state;
}

// Store
const store = redux.createStore(rootReducer);
console.log(store.getState());

// Subscription
store.subscribe(() => {
    console.log('[Subscription] ',store.getState());
});

// Dispatch Actions
store.dispatch({type: 'ADDMANGO',value:10});
store.dispatch({type: 'SUBTRACTMANGO',value:5});
console.log(store.getState());



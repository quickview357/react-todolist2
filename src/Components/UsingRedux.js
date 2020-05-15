import { createStore } from 'redux';
let initialState = {
    status: false,
    sort: {
        by: '',
        direction: 'ASC'
    }
};

let myReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'TOGGLE_STATUS':
            //return !state.status;
            return Object.assign({}, state, {status: !state.status});
        case 'SORT':
            return Object.assign({}, state, {
                sort: action.sort
            });
        default:
            return state
    }    
};

const store = createStore(myReducer);

const toogleAction = {
    type: 'TOGGLE_STATUS'
};

const sortAction = {
    type: 'SORT',
    sort: {
        by: 'Name',
        direction: 'DESC'
    }
};

console.log(store.getState());
//store.dispatch(toogleAction);
store.dispatch(sortAction);
console.log(store.getState());



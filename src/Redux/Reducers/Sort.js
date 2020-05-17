//initial state
let initialState = {
    by: '',
    direction: 'ASC'
};

//reducer
let myReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'SORT':
            return Object.assign({}, action.sort);
        default:
            return state
    }    
};

export default myReducer;
//initial state
let initialState = false;

//reducer
let myReducer = (state = initialState, action)=>{
    switch (action.type){
        case 'TOGGLE_STATUS':            
            return state = !state;;
        default:
            return state
    }    
};
export default myReducer

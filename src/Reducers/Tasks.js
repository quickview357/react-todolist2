import {LIST_ALL}  from '../Constants/ActionTypes';

var tasks = JSON.parse(localStorage.getItem('tasks'));
// var tasks = [
//     {
//         id: 'xxx',
//         name: 'Quang',
//         status: true
//     }
// ];
var initialState  = tasks ? tasks : [];
var myReducer = (state = initialState, action)=>{
    switch(action.type){
        case LIST_ALL:
            return state;
        default:
            return state;
    }    
}
export default myReducer;
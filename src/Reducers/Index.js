import {combineReducers} from 'redux';
import tasks from './Tasks'

let myReducer = combineReducers({
    tasks: tasks
});
export default myReducer;
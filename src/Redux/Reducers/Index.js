import status from './Status';
import sort from './Sort'
import {combineReducers} from 'redux';

const myReducer = combineReducers({
    status: status,
    sort: sort
});

export default myReducer;
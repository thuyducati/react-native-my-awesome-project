import {combineReducers} from 'redux';
import taskReducers from './Todo/tasksReducers';
import counterReducers from './Counter/counterReducers';

const allReducers = combineReducers({
  taskReducers,
  counterReducers,
});

export default allReducers;

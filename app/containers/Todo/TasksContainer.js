import {connect} from 'react-redux';
import {toggleOneTask} from '../../redux/actions/Todo';
import TasksComponent from '../../components/Todo/TasksComponent';

const mapStateToProps = (state) => {
  console.log(`State send to task list = ${JSON.stringify(state)}`);
  return {
    tasks: !state.taskReducers ? [] : state.taskReducers,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onToggleTask: (taskId) => dispatch(toggleOneTask(taskId)),
  };
};
const TasksContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TasksComponent);

export default TasksContainer;

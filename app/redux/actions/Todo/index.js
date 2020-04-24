import {
    ADD_NEW_TASK,
    TOGGLE_ONE_TASK
} from "./actionTypes";

let taskId = 0;

const addNewTask = (taskName) => {
    return {
        type: ADD_NEW_TASK,
        taskId: taskId++,
        taskName: taskName
    };
};

const toggleOneTask = (taskId) => {
    return {
        type: TOGGLE_ONE_TASK,
        taskId: taskId
    };
};

export { addNewTask, toggleOneTask };
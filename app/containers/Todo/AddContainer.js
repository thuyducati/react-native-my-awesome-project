import { connect } from "react-redux";
import { addNewTask } from "../../redux/actions/Todo";
import AddComponent from "../../components/Todo/AddComponent";

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: (taskName) => dispatch(addNewTask(taskName))
    };
};
const AddContainer = connect(mapStateToProps, mapDispatchToProps)(AddComponent);

export default AddContainer;
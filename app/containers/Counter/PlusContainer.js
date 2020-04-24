import { connect } from "react-redux";
import { plus } from "../../redux/actions/Counter";
import PlusComponent from "../../components/Counter/PlusComponent";

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {
        onPlusOneUnit: (unit) => dispatch(plus(unit))
    };
};
const PlusContainer = connect(mapStateToProps, mapDispatchToProps)(PlusComponent);

export default PlusContainer;
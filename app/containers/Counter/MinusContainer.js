import { connect } from "react-redux";
import { minus } from "../../redux/actions/Counter";
import MinusComponent from "../../components/Counter/MinusComponent";

const mapStateToProps = (state) => {
    return {};
};
const mapDispatchToProps = (dispatch) => {
    return {
        onMinusOneUnit: (unit) => dispatch(minus(unit))
    };
};
const MinusContainer = connect(mapStateToProps, mapDispatchToProps)(MinusComponent);

export default MinusContainer;
import {connect} from 'react-redux';
import ResultComponent from '../../components/Counter/ResultComponent';

const mapStateToProps = (state) => {
  return {
    unit: state.counterReducers ? state.counterReducers : 0,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {};
};
const ResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultComponent);

export default ResultContainer;

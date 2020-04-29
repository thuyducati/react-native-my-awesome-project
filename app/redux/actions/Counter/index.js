import {INCREMENT, DECREMENT} from './actionTypes';

const plus = (unit) => {
  return {
    type: INCREMENT,
    unit: unit,
  };
};
const minus = (unit) => {
  return {
    type: DECREMENT,
    unit: unit,
  };
};

export {plus, minus};

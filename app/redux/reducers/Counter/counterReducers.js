import {
    INCREMENT,
    DECREMENT
} from "../../actions/Counter/actionTypes";

const counterReducers = (unit = 0, action) => {
    switch (action.type) {
        case INCREMENT:
            return unit += action.unit;

        case DECREMENT:
            return unit -= action.unit;

        default:
            return unit;
    }
};

export default counterReducers;
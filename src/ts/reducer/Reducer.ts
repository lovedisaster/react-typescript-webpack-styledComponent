import {ActionType, Actions} from "../actions/Actions";
import { StateType } from "../App";
import { DeepClone } from "../utils/Utils";

const Reducer = (state : StateType, action : ActionType) => {
    let newState = DeepClone(state);
    switch(action.type) {
        case Actions.SELECT_PLAN:
            return newState;
        case Actions.SELECT_PLAN_CATEGORY:
            newState.step1.selected = Number(action.payload);
            return newState;
        default: 
            return state;
    }
}

export default Reducer
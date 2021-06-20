import {ActionType, Actions} from "../actions/Actions";
import { PlanType, StateType } from "../App";
import { DeepClone } from "../utils/Utils";
import {ScheduledPlanType} from "../api/ApiConsumer";

const Reducer = (state : StateType, action : ActionType) => {
    let newState = DeepClone(state);
    switch(action.type) {
        case Actions.SELECT_PLAN:
            newState.step2.selectedItem = action.payload;
            newState.step2.planList.forEach((listItem : PlanType) => {
                if(listItem?.index === newState.step2?.selectedItem?.index) {
                    listItem.selected = true;
                }else {
                    listItem.selected = false;
                }
            })
            return newState;
        case Actions.SELECT_PLAN_CATEGORY:
            newState.step1 = action.payload;
            newState.step2.selectedItem = null;
            newState.step2.planList = newState?.serverData?.scheduleOptions.map((plan : ScheduledPlanType) : PlanType => {
            if(newState.step1.selectedValue === plan.interval) {
                return {
                    index: plan.id,
                    duration: plan.duration,
                    price: plan.instalmentAmount,
                    remaining: plan.paymentCount,
                    selected: false
                }
            }
            });
            newState.step2.planList = newState.step2.planList.filter((x : any ) => x != undefined );
            return newState;
        case Actions.SET_SERVER_DATA: 
            newState.serverData = action.payload;
            return newState;
        default: 
            return state;
    }
}

export default Reducer
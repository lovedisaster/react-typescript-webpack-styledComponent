import React from "react";
import { Actions } from "../../actions/Actions";
import { PlanType, Step2 } from "../../App";
import { Step2Wrapper, PlanListItem, PlanList, PlanContent, PlanPrice } from "./Step2.styles";

type Step2PropsType = {
  data: Step2;
  dispatch: Function;
};

const Step2 = (props: Step2PropsType) => {
  return (
    <Step2Wrapper>
      <h2 className="title">STEP 2</h2>
      <p>Pick your repayment frequency</p>
      {props.data.planList && (
        <PlanList data-testid={"plan-items-list"}>
          {props?.data?.planList.map(
            (plan: PlanType) =>
              plan && (
                <PlanListItem
                  key={plan.index}
                  onClick={() => {
                    props.dispatch({ type: Actions.SELECT_PLAN, payload: plan });
                  }}
                  selected={plan.selected}
                >
                  <PlanContent>
                    <h4 className="title">{plan.remaining} Remaining payments</h4>
                    <span>Total plan duration {plan.duration}</span>
                  </PlanContent>
                  <PlanPrice>{plan.price}</PlanPrice>
                </PlanListItem>
              )
          )}
        </PlanList>
      )}
    </Step2Wrapper>
  );
};

export default Step2;

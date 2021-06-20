import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {Step1Wrapper,ButtonsWrapper, CategoryButton} from './Step1.styles';
import {DeepClone} from '../../utils/Utils';
import { Actions } from '../../actions/Actions';

type Step1PropsType = {
    selectedPlan : number,
    dispatch : Function
}

type PlanCategoryType = {
    index: number, 
    value: PlanCategoryNames,
    selected: boolean,
    enabled: boolean
}

enum PlanCategoryNames {
    WEEKLY = "Weekly",
    FORTNIGHTLY = "Fortnightly",
    MONTHLY = "Monthly"
}

const Step1 = (props : Step1PropsType) => {

    const [plans, setPlans ] = useState<Array<PlanCategoryType>>(
        [
            {index: 1, value: PlanCategoryNames.WEEKLY, selected: false, enabled: true},
            {index: 2, value: PlanCategoryNames.FORTNIGHTLY, selected: false, enabled: true},
            {index: 3, value: PlanCategoryNames.MONTHLY, selected: false, enabled: true}
        ]
    )

    useEffect(() => {
        let plansClone = DeepClone(plans);
        setPlans(plansClone.map(
            (planItem : PlanCategoryType) => {
                if(planItem.index === props.selectedPlan) {
                    planItem.selected = true;
                }else{
                    planItem.selected = false;
                }
                return planItem;
            }
        ))
    }, [props.selectedPlan]);

    return (
        <Step1Wrapper>
            <h2 className="title">STEP 1</h2>
            <p>Pick your repayment frequency</p>
            <ButtonsWrapper>
                {
                    plans.map((planItem : PlanCategoryType) => <CategoryButton key={planItem.index} onClick={
                        () => {
                            props.dispatch({type: Actions.SELECT_PLAN_CATEGORY, payload: {selected: planItem.index, selectedValue: planItem.value.toLowerCase()}});
                        }
                    } selected={planItem.selected}>
                        {planItem.value}
                    </CategoryButton>)
                }
            </ButtonsWrapper>
        </Step1Wrapper>
    );
};

Step1.propTypes = {
    selectedPlan : PropTypes.number,
    dispatch: PropTypes.func
};

export default Step1;
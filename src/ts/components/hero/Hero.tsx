import React from 'react';
import PropTypes from 'prop-types';
import {HeroWrapper, PaymentDue} from './Hero.styles'

type DepositAmount = {
    depositAmount : number
}

const Hero = (props : DepositAmount) => {
    return (
        <HeroWrapper>
            <h1 className="title">Plan Setup</h1>
            <p className="sub-title">Pick the plan that best for you and your budget</p>
            <PaymentDue>
                <span>Payment due today</span>
                <span className="price">
                   {props.depositAmount}
                </span>
            </PaymentDue>
        </HeroWrapper>
    );
};

Hero.propTypes = {
    depositAmount : PropTypes.number
};

export default Hero;
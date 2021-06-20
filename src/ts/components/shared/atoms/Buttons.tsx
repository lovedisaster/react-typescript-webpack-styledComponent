import React from 'react';
import {PrimaryBtn} from "./Buttons.styles";


type PrimaryButtonType = {
    value : string,
    enabled: boolean,
    width: string
}

const PrimaryButton = (props : PrimaryButtonType)  => {
    return (
        <PrimaryBtn width={props.width} disabled={!props.enabled} active={props.enabled}>
            {props.value}
            </PrimaryBtn>
    );
};

export default PrimaryButton;
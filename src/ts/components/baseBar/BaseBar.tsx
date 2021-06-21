import React from "react";
import { BaseBarWrapper } from "./BaseBar.styles";
import PrimaryButton from "../shared/atoms/Buttons";

type BaseBarPropType = {
  enabled: boolean;
};

const BaseBar = (props: BaseBarPropType) => {
  return (
    <BaseBarWrapper>
      <PrimaryButton width={"200px"} enabled={props.enabled} value={"Submit Plan"} />
    </BaseBarWrapper>
  );
};

export default BaseBar;

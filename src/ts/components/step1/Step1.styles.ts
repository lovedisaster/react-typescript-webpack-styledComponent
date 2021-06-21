import { WrapperCommonStyles } from "../../App.styles";
import styled from "styled-components";
import GlobalStyle from "../../Global.styles";

export const Step1Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  ${WrapperCommonStyles}
  > .title {
    margin-bottom: 0;
  }
`;

type ButtonProps = {
  selected: boolean;
};

export const CategoryButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: ${GlobalStyle.fontSize.Small};
  background-color: #fff;
  margin-right: 5px;
  padding: 3px 5px;
  border: 1px solid ${(props: ButtonProps) => (props.selected ? GlobalStyle.colors.primaryBlue : "#000")};
  border-radius: 3px;
  :hover {
    cursor: pointer;
  }
`;

export const ButtonsWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: flex-start;
`;

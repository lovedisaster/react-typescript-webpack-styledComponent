import styled from "styled-components";
import GlobalStyle from "../../../Global.styles";

export const PrimaryBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 8px 15px;
  font-size: ${GlobalStyle.fontSize.P};
  background-color: ${(props: PrimaryBtnProps) => (props.active ? GlobalStyle.colors.primaryBlue : "#eee")};
  color: #fff;
  border-radius: 3px;
  width: ${(props: PrimaryBtnProps) => (props.width ? props.width : "auto")};
  border: none;
  :hover {
    cursor: pointer;
  }
`;

type PrimaryBtnProps = {
  width: string;
  active: boolean;
};

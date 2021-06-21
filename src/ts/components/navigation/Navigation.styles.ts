import styled from "styled-components";
import { WrapperCommonStyles } from "../../App.styles";
import GlobalStyle from "../../Global.styles";
export const NavBar = styled.section`
  height: 70px;
  justify-content: space-between;
  align-items: center;
  ${WrapperCommonStyles}
  > .logo {
    width: 100px;
    display: block;
    @media (max-width: ${GlobalStyle.media.sm}) {
      margin-left: 15px;
    }
  }
`;

export const Cart = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  @media (max-width: ${GlobalStyle.media.md_m}) {
    margin-right: 15px;
  }
  > .cart {
    width: 30px;
    margin-right: 15px;
  }
  > .value {
    display: inline-flex;
    justify-content: center;
    align-items: center;
  }
`;

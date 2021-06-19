import styled from "styled-components";
import GlobalStyle  from "../../Global.styles";
import { WrapperCommonStyles } from "../../App.styles";

export const HeroWrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${WrapperCommonStyles};
    > .title {
        font-size: ${GlobalStyle.fontSize.H1};
        margin-bottom: 0;
    }
    > .sub-title {
        font-size: ${GlobalStyle.fontSize.P};
        margin-bottom: 30px;
    }
`;

export const PaymentDue = styled.span`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    > span {
        color: ${GlobalStyle.colors.primaryBlue};
    }

    > .price {
        font-size: ${GlobalStyle.fontSize.H2};
        margin-top: 10px;
    }
`;
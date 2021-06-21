import { WrapperCommonStyles } from "../../App.styles";
import styled from "styled-components";
import GlobalStyle from "../../Global.styles";

export const Step2Wrapper = styled.section`
  ${WrapperCommonStyles}
  justify-content: flex-start;
  flex-direction: column;
  margin-top: 50px;
  > .title {
    margin-bottom: 0;
  }
`;

export const PlanList = styled.section`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media (max-width: ${GlobalStyle.media.md_m}) {
    flex-direction: column;
  }
`;

type ListItemProps = {
  selected: boolean;
};

export const PlanListItem = styled.div`
  width: calc(50% - 15px);
  min-width: 300px;
  min-height: 80px;
  height: auto;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 3px;
  border: 1px solid ${(props: ListItemProps) => (props.selected ? GlobalStyle.colors.primaryBlue : "#eee")};
  padding: 10px 15px;
  margin: 0 15px 15px 0;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: ${GlobalStyle.media.md_m}) {
    margin: 15px 0;
    width: 100%;
  }
`;

export const PlanContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  height: 60px;
  > .title {
    color: ${GlobalStyle.colors.primaryBlue};
    margin: 0;
  }
`;

export const PlanPrice = styled.div`
  width: 100px;
  display: inline-flex;
  justify-content: flex-end;
`;

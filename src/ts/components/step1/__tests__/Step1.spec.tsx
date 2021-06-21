import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Step1 from "../Step1";
import GlobalStyle from "../../../Global.styles";
import TestRenderer from "react-test-renderer";

describe("Test step1 component functionalities", () => {
  const testPlanIndex = 1;
  beforeAll(() => {
    render(<Step1 selectedPlan={testPlanIndex} dispatch={() => {}} />);
  });
  test("Active plan should be highlighted", () => {
    expect(screen.getByTestId(testPlanIndex)).toHaveStyle(`border: 1px solid ${GlobalStyle.colors.primaryBlue}`);
  });
});

describe("Test step1 component UI", () => {
  test("Snapshot", () => {
    const testPlanIndex = 1;
    const RenderedHomePage = TestRenderer.create(<Step1 selectedPlan={testPlanIndex} dispatch={() => {}} />).toJSON();
    expect(RenderedHomePage).toMatchSnapshot();
  });
});

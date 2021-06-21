import React from "react";
import "@testing-library/jest-dom";
import { render, waitFor } from "@testing-library/react";
import App from "./App";
import { GetMockData } from "./api/__mock__/ApiConsumer";
import { ServerData } from "./api/ApiConsumer";
import { Simulate } from "react-dom/test-utils";

describe("Test mock app loading", () => {
  test("There should be plans that users can select", async () => {
    GetMockData.mockRejectedValueOnce(ServerData);
    const { getByTestId } = render(<App />);
    const resolvedPlanSection = await waitFor(() => getByTestId("test-plans-section"));
    expect(resolvedPlanSection).toHaveTextContent("Weekly");
    expect(resolvedPlanSection).toHaveTextContent("Monthly");
    expect(resolvedPlanSection).toHaveTextContent("Fortnightly");
  });
});

describe("Test response to actions", () => {
  test("There should be plans that users can select", async () => {
    GetMockData.mockRejectedValueOnce(ServerData);
    const { getByTestId } = render(<App />);
    const resolvedPlanButton = await waitFor(() => getByTestId("1"));
    Simulate.click(resolvedPlanButton);
    const resolvedPlanItemsList = await waitFor(() => getByTestId("plan-items-list"));
    expect(resolvedPlanItemsList).toHaveTextContent("Total plan duration");
    expect(resolvedPlanItemsList.childElementCount).toBe(3);
  });
});

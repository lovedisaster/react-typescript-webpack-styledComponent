export interface ActionType {
  type: string;
  payload?: object;
}

export const Actions = {
  SELECT_PLAN_CATEGORY: "SELECT_PLAN_CATEGORY",
  SELECT_PLAN: "SELECT_PLAN",
  SET_SERVER_DATA: "SET_SERVER_DATA",
};

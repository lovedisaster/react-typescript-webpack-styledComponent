import React, { useMemo, useReducer } from "react";
import { StyledInterface } from "styled-components";
import {GlobalStyle} from "./App.styles";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Step1 from "./components/step1/Step1";
import Reducer from "./reducer/Reducer";

type CartType = {
  total : number
}

type Step1 = {
  selected : number
}

type Step2 = {
  selectedItem? : PlanType
}

type PlanType = {
  title: string,
  subTitle: string,
  planType: string,
  price: number
}

export type StateType = {
  cart: CartType,
  step1: Step1,
  step2: Step2
}

const InitState : StateType = {
  cart: {total: 0},
  step1: {selected: 0},
  step2: {selectedItem: null}
}

const App = () => {
  const [state, dispatch] = useReducer(Reducer, InitState);

  return <>
    <GlobalStyle/>
    <Navigation total={0}/>
    <Hero depositAmount={0}/>
    <Step1 dispatch={dispatch} selectedPlan={state.step1.selected}/>
  </>
};
  


export default App;

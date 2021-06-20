import React, { useEffect, useMemo, useReducer } from "react";
import {GS} from "./App.styles";
import Navigation from "./components/navigation/Navigation";
import Hero from "./components/hero/Hero";
import Step1 from "./components/step1/Step1";
import Step2 from "./components/step2/Step2";
import Reducer from "./reducer/Reducer";
import { GetMockData, ServerDataType } from "./api/ApiConsumer";
import { Actions } from "./actions/Actions";
import BaseBar from "./components/baseBar/BaseBar";

type CartType = {
  total : number
}

type Step1 = {
  selected : number,
  selectedValue: string
}

export type Step2 = {
  planList : Array<PlanType>
  selectedItem? : PlanType
}

export type PlanType = {
  index: string,
  remaining: number,
  duration: string,
  price: string,
  selected: boolean
}

export type StateType = {
  cart: CartType,
  step1: Step1 | any,
  step2: Step2 | any,
  serverData? : ServerDataType | any 
}

const InitState : StateType = {
  cart: {total: 0},
  step1: {selected: 0 , selectedValue: ""},
  step2: {selectedItem: null},
  serverData: null
}

const App = () => {
  const [state, dispatch] = useReducer(Reducer, InitState);

  useEffect(() => {
    GetMockData().then((serverData : ServerDataType) => {
      dispatch({type: Actions.SET_SERVER_DATA, payload: serverData});
    }).catch(e => {
      //UI for error handling
    })
  }, []);
  
  return <>
    <GS/>
    <Navigation total={state.serverData ? state.serverData.purchasePrice : 0}/>
    <Hero depositAmount={state.serverData ? state.serverData.depositAmount : 0}/>
    <Step1 dispatch={dispatch} selectedPlan={state.step1.selected}/>
    <Step2 dispatch={dispatch} data={state.step2}/>
    <BaseBar enabled={state.step2 && state.step2.selectedItem ? true : false} />
  </>
};
  


export default App;

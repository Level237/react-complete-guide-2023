import {createStore} from "redux";
import {createSlice} from "@reduxjs/toolkit"
export const INCREMENT="increment";
const initialState={counter:0,showCounter:true}
const counterReducer=(state=initialState,action)=>{

    createSlice({
        name:"counter",
        initialState,
        reducers:{
            increment(state){
                state.counter++;
            },
            decrement(state){
                state.counter--;
            },
            increase(state,action){
                state.counter=state.counter+action.amount
            },
            toogleCounter(state){
                state.showCounter=!state.showCounter
            }
        }
    })
    if(action.type===INCREMENT){
        //state.counter++; You don't never mutate state
        return {
            counter:state.counter +1,
            showCounter:state.showCounter
        };
    }

    if(action.type==="increase"){
        return {
            counter:state.counter +action.amount,
            showCounter:state.showCounter
        };
    }
    if(action.type==="decrement"){
        return {
            counter:state.counter -1,
            showCounter:state.showCounter
        };
    }

    if(action.type==="toogle"){
        return{
            showCounter:!state.showCounter,
            counter:state.counter
        }
    }
   return state;
};

const store=createStore(counterReducer);


export default store;

import {createSlice,configureStore} from "@reduxjs/toolkit"
export const INCREMENT="increment";
const initialState={counter:0,showCounter:true}

const counterSlice=createSlice({
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
            state.counter=state.counter+action.payload
        },
        toogleCounter(state){
            state.showCounter=!state.showCounter
        }
    }
})

const store=configureStore({
    reducer:counterSlice.reducer
});

export const counterAction=counterSlice.actions

export default store;
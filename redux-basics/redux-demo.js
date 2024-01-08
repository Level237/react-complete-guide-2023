const redux=require('redux')

const counterReducer=(state={counter:0},action)=>{
    return {
        counter:state.counter +1
    };
}
const store=redux.createStore(counterReducer);


const counterSubscriber=()=>{
    const laterState=store.getState();
    console.log(laterState)
}

store.subscribe(counterSubscriber)
store.dispatch({type:'Increment'})


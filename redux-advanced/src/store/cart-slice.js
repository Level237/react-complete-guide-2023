import {createSlice} from "@reduxjs/toolkit"


const cartSlice=createSlice({
    name:'cart',
    initialState:{
        items:[],
        totalQuantity:0,
        changed:false,
    },
    reducers:{
        addItemToCart(state,action){
            const newItem=action.payload;
            const existingItem=state.items.find(item=>item.id===newItem.id)
            state.totalQuantity++
            state.changed=true;
            if(!existingItem){
                state.items.push({
                    id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    name:newItem.title
                })
               
            }else{
                existingItem.quantity++;
                existingItem.quantity=existingItem.quantity++
                existingItem.totalPrice=existingItem.totalPrice+newItem.price
            }
            
        },
        removeItemToCart(state,action){
            const id=action.payload;

            const existingItem=state.items.find(item=>item.id===id);
            state.totalQuantity--
            if(existingItem.quantity===1){
                state.items=state.items.filter(item=>item!==id)
                console.log(existingItem.quantity)
            }else{
                existingItem.quantity--;
                console.log(existingItem.quantity)
                existingItem.totalPrice=existingItem.totalPrice - existingItem.price
            }
        },
        replaceCart(state,action){
            state.totalQuantity=action.payload.totalQuantity;
            state.items=action.payload.items;
            console.log(state.items)
        }
    }
})


export const cartAction=cartSlice.actions;

export default cartSlice;
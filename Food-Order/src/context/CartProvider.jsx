import { useReducer } from "react"
import CartContext from "./cart-context"


const defaultCartState={
    items:[],
    totalAmount:0
}
const cartReducer=(state,action)=>{
    if(action.type==="ADD"){

        const existingCartItemIndex=state.items.findIndex((item)=>{
            return item.id===action.item.id
        })
        const existingCartItem=state.items[existingCartItemIndex]
        let updatedItems;

        if(existingCartItem){
            const updateItem={
                ...existingCartItem,
                amount:existingCartItem.amount + action.item.amount
            }
            console.log(updateItem)
            updatedItems=[...state.items]
            updatedItems[existingCartItemIndex]=updateItem
        }else{
          updatedItems=state.items.concat(action.item);
        }
        
        const updatedTotalAmount=state.totalAmount + action.item.price * action.item.amount;

        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    if(action.type==="REMOVE"){

        const existingCartItemIndex=state.items.findIndex((item)=>{
            return item.id===action.id
        })
        const existingCartItem=state.items[existingCartItemIndex]
        const updatedTotalAmount=state.totalAmount - existingCartItem.price
        //console.log(updatedTotalAmount)
        let updatedItems;
        if(existingCartItem.amount===1){
            updatedItems=state.items.filter((item)=>{
                return item.id !==action.id
            });
        }else{
            const updatedItem={...existingCartItem,amount:existingCartItem.amount - 1};
            updatedItems=[...state.items];
            updatedItems[existingCartItemIndex]=updatedItem
        }

        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }

    }

    if(action.type==="CLEAR"){
        return defaultCartState
    }

    return defaultCartState
}
export const CardProvider=(props)=>{

    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultCartState)


    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type:"ADD",item:item})
    }

    const removeItemToCartHandler=(id)=>{
        dispatchCartAction({type:"REMOVE",id:id})
    }
    const clearCartHandler=()=>{
        dispatchCartAction({type:'CLEAR'})
    }

    const cartContext={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemToCartHandler,
        removeItem:removeItemToCartHandler,
        clearCart:clearCartHandler
    }
    return <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>

}
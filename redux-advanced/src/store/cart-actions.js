import { cartAction } from "./cart-slice";
import { uiActions } from "./ui-slice";


export const fetchCartdata=()=>{
    return async (dispatch)=>{
        const fetchData=async()=>{
            const response=await fetch("https://food-15762-default-rtdb.firebaseio.com/cart.json")
            if(!response.ok){
                throw new Error('Could not fetch cart data')
            }
            const data=await response.json();
            
            return data;
        };

        try{
            const cartData=await fetchData();
            dispatch(cartAction.replaceCart(cartData))
        }catch(error){
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Sending cart data failed!',
                })
              );
        }
        
    }
}
export const sendCartData=(cartData)=>{

    return async (dispatch)=>{
        dispatch(
            uiActions.showNotification({
              status:'pending',
              title:"Sending",
              message:'Sending Cart data'
            })
          );

          const sendRequest=async()=>{
            const response=await fetch("https://food-15762-default-rtdb.firebaseio.com/cart.json",{
                method:"PUT",
                body:JSON.stringify(cartData)
              })
              if (!response.ok) {
                throw new Error('Sending cart data failed.');
              }
          }
        try{
            await sendRequest()
            dispatch(
                uiActions.showNotification({
                  status: 'success',
                  title: 'Success!',
                  message: 'Sent cart data successfully!',
                })
              );
        }catch(error){
            dispatch(
                uiActions.showNotification({
                  status: 'error',
                  title: 'Error!',
                  message: 'Sending cart data failed!',
                })
              );
        }
         
     
    }
}
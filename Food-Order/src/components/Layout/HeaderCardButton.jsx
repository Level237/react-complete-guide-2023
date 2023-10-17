import { useContext, useEffect, useState } from "react"
import CardIcon from "../Cart/CartIcon"
import classes from './HeaderCardButton.module.css'
import CartContext from "../../context/cart-context"
const HeaderCardButton=(props)=>{

    const [btnIsHighlighted,setBtnIsHighlighted]=useState(false)
    const cartCtx=useContext(CartContext)

    const numberOfCart=cartCtx.items.reduce((currentNumber,item)=>{
        return currentNumber + item.amount
    },0);

    const {items}=cartCtx
    const btnClasses=`${classes.button} ${ btnIsHighlighted ? classes.bump : ""}`

    useEffect(()=>{
        if(cartCtx.items.length===0){
            return;
        }
        setBtnIsHighlighted(true)

        const timer=setTimeout(()=>{
            setBtnIsHighlighted(false)
        },300)

        return ()=>{
            clearTimeout(timer)
        }
    },[cartCtx.items])
    return (
        <>
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CardIcon/>
            </span>
            <span>Your Card</span>
            <span className={classes.badge}>
                {numberOfCart}
            </span>
        </button>
        </>
    )
}

export default HeaderCardButton
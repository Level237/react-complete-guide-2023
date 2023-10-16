import { useContext } from "react"
import CardIcon from "../Cart/CartIcon"
import classes from './HeaderCardButton.module.css'
import CartContext from "../../context/cart-context"
const HeaderCardButton=(props)=>{

    const cartCtx=useContext(CartContext)

    const numberOfCart=cartCtx.items.reduce((currentNumber,item)=>{
        return currentNumber + item.amount
    },0);
    return (
        <>
        <button className={classes.button} onClick={props.onClick}>
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
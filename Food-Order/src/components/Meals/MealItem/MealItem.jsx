import CartContext from "../../../context/cart-context"
import { useContext } from "react"
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm"
const MealItem=(props)=>{

    const cartCtx=useContext(CartContext)
    const addToCartHandler=(amount)=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    }
    const price=`$${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <h3>{props.name}</h3>
            <div className={classes.description}>{props.description}</div>
            <div className={classes.price}>{price}</div>

            <div>
                <MealItemForm onAddToCart={addToCartHandler}/>
            </div>
        </li>
    )

}

export default MealItem
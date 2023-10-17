import { useContext } from "react"
import Modal from "../Ui/Modal"
import classes from "./Cart.module.css"
import CartContext from "../../context/cart-context"
import CartItem from "./CartItem"
const Cart=(props)=>{

    const cartCtx=useContext(CartContext)

    const cartItemRemoveHandler=(id)=>{

    }

    const cartItemAddHandler=(item)=>{

    }
    const cardItems= (
    <ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=>(
             <CartItem 
             key={item.id} 
             name={item.name} 
             onRemove={cartItemRemoveHandler.bind(null,item.id)}
             onAdd={cartItemAddHandler.bind(null,item)}
             price={item.price} 
             amount={item.amount}/>
        ))}
    </ul>)
    const totalAmount=cartCtx.totalAmount.toFixed(2)
    const hasItems=cartCtx.items.length >0
    return (
<Modal onClose={props.onClose}>
        {cardItems}
        <div className={classes.total}>
            <span>Total Amount:</span>
            <span>${totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button onClick={props.onClose} className={classes['button--alt']}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
    )
    
}

export default Cart


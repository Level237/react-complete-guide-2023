import Modal from "../Ui/Modal"
import classes from "./Cart.module.css"
const Cart=(props)=>{

    const cardItems= <ul className={classes['cart-items']}>{[
        {id:"e2",name:"Sushi",amount:2,price:12.5},
    ].map((el)=><li>{el.name}</li>)}</ul>

    return (
<Modal>
        {cardItems}
        <div>
            <span>Total Amount</span>
            <span>35.62</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']}>Close</button>
            <button className={classes.button}>Order</button>
        </div>
    </Modal>
    )
    
}

export default Cart


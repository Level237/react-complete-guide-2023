import classes from "./Cart.module.css"
const Card=(props)=>{

    const cardItems= <ul className={classes['cart-items']}>{[
        {id:"e2",name:"Sushi",amount:2,price:12.5},
    ].map((el)=><li>{el.name}</li>)}</ul>

    return 
    <div>
        {cardItems}
        <div></div>
        <div></div>
    </div>
}

export default Card


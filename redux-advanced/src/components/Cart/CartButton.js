import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';
import {useDispatch,useSelector} from "react-redux"

const CartButton = (props) => {

  const cartQuantity=useSelector(state=>state.cart.totalQuantity)
  const dispatch=useDispatch()
  const tooggleCartHandler=()=>{
    dispatch(uiActions.toogle())
  }
  return (
    <button className={classes.button} onClick={tooggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;

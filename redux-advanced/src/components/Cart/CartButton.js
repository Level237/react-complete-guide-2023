import { uiActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';
import {useDispatch} from "react-redux"

const CartButton = (props) => {

  const dispatch=useDispatch()
  const tooggleCartHandler=()=>{
    dispatch(uiActions.toogle())
  }
  return (
    <button className={classes.button} onClick={tooggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;

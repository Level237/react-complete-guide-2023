import { Fragment, useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

function App() {

  const [cardIsShow,setCardIsShow]=useState(false)

  const showCardHandler=()=>{
    setCardIsShow(true)
  }

  const hiddenCardHandler=()=>{
    setCardIsShow(false)
  }
  return (
    <Fragment>
      {cardIsShow && <Cart onClose={hiddenCardHandler}/>}
      <Header onShowCard={showCardHandler}/>
      <main>
        <Meals/>
      </main>
    </Fragment>
  );
}

export default App;

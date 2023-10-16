import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import { CardProvider } from "./context/CartProvider";

function App() {

  const [cardIsShow,setCardIsShow]=useState(false)

  const showCardHandler=()=>{
    setCardIsShow(true)
  }

  const hiddenCardHandler=()=>{
    setCardIsShow(false)
  }
  return (
    <CardProvider>
      {cardIsShow && <Cart onClose={hiddenCardHandler}/>}
      <Header onShowCard={showCardHandler}/>
      <main>
        <Meals/>
      </main>
    </CardProvider>
  );
}

export default App;

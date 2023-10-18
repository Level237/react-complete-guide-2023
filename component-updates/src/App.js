import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button';
import DemoOutput from './components/Demo/DemoOutput';

function App() {

  const [showParagraph,setShowParagraph]=useState(false)

  const toogleParagraphHandler=()=>{
    setShowParagraph(prevShowParagraph=>!prevShowParagraph)
  }
  console.log("App Running")
  return (
    <div className="app">
      <h1>Hi there!</h1>
     <DemoOutput show={showParagraph}/>
      <Button onClick={toogleParagraphHandler}>Toogle Paragraph</Button>
    </div>
  );
}

export default App;

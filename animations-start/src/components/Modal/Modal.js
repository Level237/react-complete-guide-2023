import React from 'react';
import CSSTransition from "react-transition-group/CSSTransition"
import './Modal.css';

const animatingTiming={
    enter:400,
    exit:1000,
}
const modal = (props) => {
    
    
    return (
    <CSSTransition mountOnEnter
        unmountOnExit
        in={props.show}
        timeout={animatingTiming}
        classNames={{ 
            enter:'',
            enterActive:'ModalOpen',
            exit:'',
            exitActive:"ModalClosed",
            appear:"",
            apearActive:"",
         }}
        >
                    <div className="Modal">
                    <h1>A Modal</h1>
                    <button className="Button" onClick={props.closed}>Dismiss</button>
                </div>
            
</CSSTransition>
)
}
   

 
export default modal;
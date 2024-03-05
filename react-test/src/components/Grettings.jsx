import  {useState} from "react";
import Output from "./Output";

const Grettings=()=>{

const [changedText, setChangedText] = useState(false);

const changeTextHandler=()=>{
    setChangedText(true)
}
    return (
        <>
         <h2>Hello World!</h2>
         {!changedText && <Output>It's good to see you!</Output>}
         {changedText && <Output>Changed!</Output>}
         <button onClick={changeTextHandler}>Changed Text</button>
        </>
    )
}

export default Grettings


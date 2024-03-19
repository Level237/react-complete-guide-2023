import CSS from "csstype";

const TodoItem:React.FC<{text:string}>=(props)=>{

    const todoItemStyles:CSS.Properties={
        margin: "1rem 0",
    boxShadow: "0 1px 4px rgba(0, 0, 0, 0.2)",
    padding: "1rem",
    backgroundColor:"#f7f5ef",
      }
    
    return (
        <li style={todoItemStyles}>
            {props.text}
        </li>
    )
}

export default TodoItem;
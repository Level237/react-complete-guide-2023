import styles from "./Card.module.css"


const Card=(props)=>{

    const className=styles.card +" "+ props.className;
    console.log(className)
    return <div className={className}>
        {props.children}
    </div>
}

export default Card;
import Button from "../../Ui/Button"
import Card from "../../Ui/Card"
import styles from "./ErrorModal.module.css"

const ErrorModal=(props)=>{

    console.log("dd")
    return (
        <div className={styles.backdrop}>
 <Card className={styles.modal}>
            <header className={styles.header} >
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button>Okay</Button>
            </footer>
        </Card>
        </div>
       
    )
   
}

export default ErrorModal
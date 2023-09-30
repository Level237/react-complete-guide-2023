import Card from "../Ui/Card"
import styles from "./UserList.module.css"

const UserList=(props)=>{

    console.log(props.users)
    return (
        <Card className={styles.users}>
            <ul>
                
            </ul>
        </Card>
    )
}

export default UserList
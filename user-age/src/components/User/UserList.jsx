import Card from "../Ui/Card"
import styles from "./UserList.module.css"

const UserList=(props)=>{

    console.log(props.users)
    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map((user)=><li key={user.id}>{user.userName} ({user.age} Year Old)</li>)}
            </ul>
        </Card>
    )
}

export default UserList
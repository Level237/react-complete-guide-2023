import { Link } from "react-router-dom"
import classes from "./main-navigation.module.css"
const MainNavigation=()=>{
    return <header className={classes.header}>
        <nav>
            <ul className={classes.list}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/products">Products</Link>
                </li>
                 <li>
                    <Link></Link>
                </li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation
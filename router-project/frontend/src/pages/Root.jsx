import MainNavigation from "../components/MainNavigation"
import {Outlet,useNavigation} from "react-router-dom"
const RootLayout=()=>{

    //const navigation=useNavigation();
     
    return (
        <>
        <MainNavigation/>
        <main>
            {/*navigation.state==="loading" && <p>loading...</p>*/}
            <Outlet/>
        </main>
        </>
    )
}

export default RootLayout
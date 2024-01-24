import MainNavigation from "../components/MainNavigation"
import {OutLet} from "react-router-dom"
const RootLayout=()=>{

    return (
        <>
        <MainNavigation/>
        <main>
            <OutLet/>
        </main>
        </>
    )
}

export default RootLayout
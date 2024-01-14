import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Homepage from "./pages/Home";
import ProductPage from "./pages/Product";

const router=createBrowserRouter([
  {
    path:'/',
    element:<Homepage/>
  },{
    path:"/products",
    element:<ProductPage/>
  }
])
function App() {
  return <RouterProvider router={router}/>;
}

export default App;

import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom"
import Homepage from "./pages/Home";
import ProductPage from "./pages/Product";

//const routeDefinitions=createRoutesFromElements(
  //<Route>
    //<Route path="/" element={<Homepage/>}/>
    //<Route path="/products" element={<ProductPage/>}/>
  //</Route>
//)
const router=createBrowserRouter([
{
    path:'/',
    element:<Homepage/>
  },{
   path:"/products",
    element:<ProductPage/>
  }
])

//const router=createBrowserRouter(routeDefinitions);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;

import {createBrowserRouter,RouterProvider,createRoutesFromElements,Route} from "react-router-dom"
import Homepage from "./pages/Home";
import ProductPage from "./pages/Product";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetail from "./pages/ProductDetail";

//const routeDefinitions=createRoutesFromElements(
  //<Route>
    //<Route path="/" element={<Homepage/>}/>
    //<Route path="/products" element={<ProductPage/>}/>
  //</Route>
//)
const router=createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index:true,
        path:'',
        element:<Homepage/>
      },{
       path:"products",
        element:<ProductPage/>
      },{
        path:"products/:productId",
        element:<ProductDetail/>
      }
    ]
  },
  

])

//const router=createBrowserRouter(routeDefinitions);
function App() {
  return <RouterProvider router={router}/>;
}

export default App;

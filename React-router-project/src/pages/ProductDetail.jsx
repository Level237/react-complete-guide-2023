import {Link, useParams} from "react-router-dom"
const ProductDetail=()=>{

    const params=useParams();

    return <>
    <h1>Product Details</h1>
    <p>{params.productId}</p>
    <p><Link to=".." relative="route">Back</Link></p>
    </>
}

export default ProductDetail
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const BASE_URL = "https://fakestoreapi.com";
import '../App.css'
import Cart from './Cart'

export default function Product() {
    const [product, setProduct] = useState({})
    const { productId } = useParams();
    const [error, setError] = useState(null)
    const [errormsg, setErrormsg] = useState(null)
    const navigate = useNavigate();


    console.log("useParams producId: ", productId);

    useEffect(() => {

        const fetchproduct = async () => {
            try {
                const response = await fetch(`${BASE_URL}/products/${productId}`)

                const result = await response.json();
                console.log(result);
                console.log("products = ", result);
                setProduct(result)
            } catch (error) {
                console.error(error);
                setError(error.message)
                setErrormsg("Sorry. we have problems fetching the product ${productId}.")

            }
        }
        fetchproduct()

    }, [])


    return (
        <div className='productPage'>
            <div className='productImage'>
                <br />
                <br />
                <img src={product.image} alt={product.title} width={300} height={300}></img>
            </div>
            <div className='productSide'>
                <br />
                <br />
                <h4>{product.title}</h4>
                <br />
                <h4>Product Description:
                    <br />
                    {product.description}</h4>
                <br />
                {/* <h4>Ratings: {product.rating.rate} ({product.rating.count})</h4> */}
                <h4>price: ${product.price}</h4>
                <br />
                <button className='product-button' onClick={
                    () => {
                        console.log("add to cart clicked");
                        // //make obj of product they purchase. stringify and store in local storge

                        localStorage.setItem("item_bought", JSON.stringify(
                            {
                                id: `${product.id}`,
                                title: `${product.title}`,
                                price: `${product.price}`,
                                image: `${product.image}`,
                                qty: 1,
                                total: parseFloat(product.price)
                            }
                        ));

                        navigate(`/Cart/${product.id}`)

                    }}>
                    Add to Cart</button>


            </div>
        </div>
    )
}
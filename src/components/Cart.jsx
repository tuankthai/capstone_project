
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";

import '../App.css'
import PurchaseItemBox from './PurchaseItemBox'
import { ShopContext } from '../context/shop-context';
import CheckOut from './CheckOut';

// tips to do 2x decimal places
// function financial(x) {
//     return Number.parseFloat(x).toFixed(2);
// }
// console.log(financial(123.456));
// Expected output: "123.46"

export default function Cart() { 
    
    // const [orderTotal, setOrderTotal] = useState(0);
    const [error, setError] = useState(null);
    const [errormsg, setErrormsg] = useState(null);
    const navigate = useNavigate();
    const { cartItems, cartTotal, getCartTotal, isTokenExist } = useContext(ShopContext);
    const orderTotal  = getCartTotal();
    // const orderTotal;

    console.log("in cart, ", cartItems)
    
    return (

        <div className='Cart'>
            <h3>SHOPPING BAG </h3><br />
            <hr />
            {/* loop through the array and display products and qty bought */}
            <div className='column_flex'>
                {cartItems.map((itemY) => {
                    console.log("map itemY : ", itemY)
                    return <PurchaseItemBox key={itemY.id} itemY={itemY}
                    />;

                })}
            </div>
            <hr />
            
            {/* <hr /> */}
            <br />
            {/* <h4>TOTAL: ${cartTotal.toFixed(2)}</h4> */}
            <h4>TOTAL: ${orderTotal.toFixed(2)}</h4>

            <div className='row_flex'>
                <button className='product-button' onClick={() => {
                    // {return isTokenExist() ? <CheckOut /> : <PreCheckout /> }
                     isTokenExist() ? navigate(`/Checkout`) : navigate(`/PreCheckout`) 
                    // navigate(`/PreCheckout`)

                }} >
                    Check Out</button>
                
                <button className='product-button' onClick={() => {
                    // localStorage.setItem("shopping_bagData", JSON.stringify(bagData));
                    navigate(`/`)

                }} >
                    Continue Shopping</button>
            </div>

        </div>
    )

}
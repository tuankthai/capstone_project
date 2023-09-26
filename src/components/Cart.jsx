
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";

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
    const { cartItems, isTokenExist, setCartItems, getCartTotal } = useContext(ShopContext);
    const orderTotal = getCartTotal();
    // const orderTotal = 500;

    function renderItem(item) {
        const decrementItems = () => {
            const index = cartItems.findIndex(x => x.id === item.id);
            if (index > -1) {
                const newState = [...cartItems];
                newState[index] = {
                    ...newState[index],
                    qty: item.qty - 1,
                }
                //if qty becomes, remove from array
                newState[index].qty === 0 && newState.splice(index, 1);
                setCartItems(newState);
            }
            //update cart grand total ....TO DO ....
        }

        const incrementItems = () => {
            const index = cartItems.findIndex(x => x.id === item.id);
            if (index > -1) {
                const newState = [...cartItems];
                newState[index] = {
                    ...newState[index],
                    qty: item.qty + 1,
                    //     total: (item.price * (item.qty + 1))
                }
                setCartItems(newState);
            }
        }

        function itemSubTotal(item) {
            let subtotal = item.price * item.qty;
            return subtotal.toFixed(2);
        }

        return (
            <div className='row_flex'>
                <div className="image_div">
                    <img src={item.image} alt={""} width={100} height={100}></img><br />
                </div>
                <div className="title_div">
                    <h4>{item.title}</h4><br />
                </div>
                <div className="price_div">
                    <h4> ${item.price}</h4><br />
                </div>
                <div className="qty_div">
                    <span onClick={() => {
                        console.log("you click span minus")
                        decrementItems();
                        console.log("after decrementItems, item", item)
                    }}>-</span>
                    &nbsp;
                    <h4> {item.qty}</h4><br />
                    &nbsp;
                    <span onClick={() => {
                        console.log("you click span plus")
                        incrementItems();
                        console.log("after incrementItems, item", item)
                    }}>+</span><br />
                </div>
                <div className="subtotal_div">
                    <h4> ${itemSubTotal(item)}</h4><br />
                </div>
            </div >
        )
    }

    console.log("in cart, cartItems = ", cartItems)
    return (
        <div className='Cart'>
            <h3>SHOPPING BAG </h3><br />
            <hr />
            {/* loop through the array and display products and qty bought */}
            <div className='column_flex'>
                {cartItems.map((itemY) => {
                    console.log("map itemY : ", itemY)
                    return renderItem(itemY);
                })}
            </div>
            <hr /><br />

            <h4>TOTAL: ${orderTotal.toFixed(2)}</h4>
            <div className='row_flex'>
                <button className='product-button' onClick={() => {
                    isTokenExist() ? navigate(`/Checkout`) : navigate(`/PreCheckout`)
                }} >
                    Check Out</button>
                <button className='product-button' onClick={() => {
                    navigate(`/`)
                }} >
                    Continue Shopping</button>
            </div>

        </div>
    )

}
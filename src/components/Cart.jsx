
import { useParams, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useContext } from "react";

import '../App.css'
// import PurchaseItemBox from './PurchaseItemBox'
import { ShopContext } from '../context/shop-context';
import CheckOut from './CheckOut';
import NavLogout from "./NavLogout";
import Nav from "./Nav";

// tips to do 2x decimal places
// function financial(x) {
//     return Number.parseFloat(x).toFixed(2);
// }
// console.log(financial(123.456));
// Expected output: "123.46"

export default function Cart() {

    const [error, setError] = useState(null);
    const [errormsg, setErrormsg] = useState(null);
    const navigate = useNavigate();
    const { cartItems, isTokenExist, setCartItems, getCartTotal, setItemsCount } = useContext(ShopContext);
    const orderTotal = getCartTotal();

    function renderItem(item) {
        const decrementItems = () => {
            const index = cartItems.findIndex(x => x.id === item.id);
            if (index > -1) {
                const newState = [...cartItems];
                newState[index] = {
                    ...newState[index],
                    qty: item.qty - 1,
                }
                //if qty becomes zero, remove from array
                newState[index].qty === 0 && newState.splice(index, 1);
                setCartItems(newState);
                setItemsCount(prev=>prev-1)

            }
        }

        const incrementItems = () => {
            const index = cartItems.findIndex(x => x.id === item.id);
            if (index > -1) {
                const newState = [...cartItems];
                newState[index] = {
                    ...newState[index],
                    qty: item.qty + 1,
                }
                setCartItems(newState);
                setItemsCount(prev => prev + 1)
            }
        }

        const handleRemove = () => {
            const index = cartItems.findIndex(x => x.id === item.id);
            if (index > -1) {
                const newState = [...cartItems];
                //update cart items count
                setItemsCount(prev => prev - newState[index].qty)
                //remove from array
                newState.splice(index, 1);
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
                    <img src={item.image} alt={""} width={60} height={40}></img><br />
                </div>
                <div className="title_div">
                    <h6>{item.title}</h6><br />
                </div>
                <div className="price_div">
                    <h6> ${item.price}</h6><br />
                </div>
                <div className="qty_div">
                    <span onClick={() => {
                        console.log("you click span minus")
                        decrementItems();
                    }}>-</span>
                    &nbsp;
                    <h6> {item.qty}</h6><br />
                    &nbsp;
                    <span onClick={() => {
                        console.log("you click span plus")
                        incrementItems();
                    }}>+</span><br />
                </div>
                <div className="subtotal_div">
                    <h6> ${itemSubTotal(item)}</h6><br />
                </div>
                <div className='remove_item_div'>
                    <h6 onClick={() => { handleRemove() }}>Remove</h6>
                </div>
            </div >
        )
    }

    console.log("in cart, cartItems = ", cartItems)
    return (
        <div>
            {isTokenExist() ? <NavLogout /> : <Nav />}
            <div className="postline"></div> 

            <div className='Cart'>
                <br />
                <h6>Shopping Bag </h6>
                <hr />
                {/* loop through the array and display products and qty bought */}
                <div className='column_flex'>
                    {cartItems.map((itemY) => {
                        console.log("map itemY : ", itemY)
                        return renderItem(itemY);
                    })}
                </div>
                <hr />

                <h6>Total: ${orderTotal.toFixed(2)}</h6>
                <div className='row_flex'>
                    <button className='product-button' onClick={() => {
                        //the following line is for tier two
                        // isTokenExist() ? navigate(`/Checkout`) : navigate(`/PreCheckout`)
                        navigate(`/Checkout`)
                    }} >
                        Check Out</button>
                    <button className='product-button' onClick={() => {
                        navigate(`/`)
                    }} >
                        Continue Shopping</button>
                </div>

            </div>
        </div>
    )

}
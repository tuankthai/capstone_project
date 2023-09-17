
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from "react";

import '../App.css'
import PurchaseItemBox from './PurchaseItemBox'
import { ShopContext } from '../context/shop-context';

// tips to do 2x decimal places
// function financial(x) {
//     return Number.parseFloat(x).toFixed(2);
// }
// console.log(financial(123.456));
// Expected output: "123.46"

export default function Cart() {
    // const { productId } = useParams();
    const [error, setError] = useState(null);
    const [errormsg, setErrormsg] = useState(null);
    const navigate = useNavigate();
    const { cartItems, cartTotal } = useContext(ShopContext);
    
    // let grandTotal = getCartTotal();

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

            {/* <div className='row_flex'>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={item_bought.image} alt={""} width={100} height={100}></img><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h4>{item_bought.title}</h4><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h4> ${item_bought.price}</h4><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span onClick={() => {
                    console.log("you click span minus")
                    if (item_bought.qty >= 1) {
                        setItem_bought({
                            ...item_bought, qty: item_bought.qty - 1,
                            total: (item_bought.price * (item_bought.qty - 1))

                        })
                        bagTotal -= item_bought.price;
                    }
                }}>-</span>
                &nbsp;
                <h4> {item_bought.qty}</h4><br />
                &nbsp;
                <span onClick={() => {
                    console.log("you click span plus")
                    setItem_bought({
                        ...item_bought, qty: item_bought.qty + 1,
                        total: (item_bought.price * (item_bought.qty + 1))
                    })
                    bagTotal += item_bought.price;
                }}>+</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h4> ${item_bought.total}</h4><br />
            </div> */}

            {/* <hr /> */}
            <br />
            <h4>TOTAL: ${cartTotal.toFixed(2)}</h4>

            <div className='row_flex'>
                <button className='product-button' onClick={() => {
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
import React from "react"
import { useState, useContext } from "react"
import '../App.css'
import { ShopContext } from '../context/shop-context';
import NavLogout from "./NavLogout";
import Nav from './Nav'
import { useNavigate } from "react-router-dom";

export default function CheckOut() {
    const subTotal = 500;
    const shipping_cost = 25;
    const taxes = 50;
    const order_total = 50;
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastname] = useState("")
    const [address, setAddress] = useState("")
    const [zip, setZip] = useState("")
    const [state, setState] = useState("")
    const [city, setCity] = useState("")
    const [phone, setPhone] = useState("")
    const [creditCardType, setCreditCardType] = useState("")
    const [cardNumber, setCardNumber] = useState("")
    const [year, setYear] = useState("")
    const [month, setMonth] = useState("")
    const navigate = useNavigate();

    const { clearCart, clearCartInLocalStorage, isTokenExist, getCartTotal } = useContext(ShopContext);
    const orderTotal = getCartTotal();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("hello login handleSubmit")
        clearCart();
        clearCartInLocalStorage();
        navigate(`/thankyou`);
        // navigate(`/`);

    }

    return (
        <div>
            {isTokenExist() ? <NavLogout /> : <Nav />}
            <hr />
            <form onSubmit={handleSubmit}>
                <div className="two_columns">

                    <div className="left_column">
                        <h1>Shipping Address</h1>
                        <input value={firstname}
                            onChange={(e) => {
                                console.log(e.target.value)
                                setFirstname(e.target.value)
                            }}
                            type="text" name="firstname" id="firstname"
                            placeholder="firstname" required
                        /><br />

                        <input value={lastname}
                            onChange={(e) => {
                                console.log(e.target.value)
                                setLastname(e.target.value)
                            }}
                            type="text" name="lastname" id="lastname"
                            placeholder="lastname" required
                        /><br />

                        <input value={address}
                            onChange={(e) => {
                                console.log(e.target.value)
                                setAddress(e.target.value)
                            }}
                            type="text" name="address" id="address"
                            placeholder="address" required
                        /><br />

                        <div className="CityStateZip">
                            <input value={city}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setCity(e.target.value)
                                }}
                                type="text" name="city" id="city"
                                placeholder="city" required
                            /><br />

                            <input value={state}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setState(e.target.value)
                                }}
                                type="text" name="state" id="state"
                                placeholder="state" required
                            /><br />

                            <input value={zip}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setZip(e.target.value)
                                }}
                                type="text" name="zip" id="zip"
                                placeholder="zip" required
                            /><br />
                        </div>
                        <br />
                        <input value={phone}
                            onChange={(e) => {
                                console.log(e.target.value)
                                setPhone(e.target.value)
                            }}
                            type="text" name="phone" id="phone"
                            placeholder="phone" required
                        /><br />
                        <h1>Credit Card Info</h1>

                        <input value={creditCardType}
                            onChange={(e) => {
                                console.log(e.target.value)
                                setCreditCardType(e.target.value)
                            }}
                            type="text" name="creditCardType" id="creditCardType"
                            placeholder="creditCardType" required
                        /><br />

                        <input value={cardNumber}
                            onChange={(e) => {
                                console.log(e.target.value)
                                setCardNumber(e.target.value)
                            }}
                            type="text" name="cardNumber" id="cardNumber"
                            placeholder="cardNumber" required
                        /><br />

                        <div className="yearMonth">

                            <input value={year}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setYear(e.target.value)
                                }}
                                type="text" name="year" id="year"
                                placeholder="year" required
                            /><br />

                            <input value={month}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setMonth(e.target.value)
                                }}
                                type="text" name="month" id="month"
                                placeholder="month" required
                            /><br />
                        </div>
                        {/* <br /> */}
                        {/* <label htmlFor="sameAddress"> billing address same as shipping address
                        <input type="checkbox" checked="checked"  background-color="black"
                            name="sameAddress" id="sameAddress"                   
                            onChange={(e) => {
                                console.log(e.target.value)
                                console.log("you clicked checked box")
                                // setMonth(e.target.value)
                                }}></input>
                        </label> */}
                        <br />
                        <h1>Billing Address</h1>
                        <input value={firstname}
                            onChange={(e) => {
                                console.log(e.target.value)
                                setFirstname(e.target.value)
                            }}
                            type="text" name="firstname" id="firstname"
                            placeholder="firstname" required
                        /><br />

                        <input value={lastname}
                            onChange={(e) => {
                                console.log(e.target.value)
                                setLastname(e.target.value)
                            }}
                            type="text" name="lastname" id="lastname"
                            placeholder="lastname" required
                        /><br />
                        <input value={address}
                            onChange={(e) => {
                                console.log(e.target.value)
                                setAddress(e.target.value)
                            }}
                            type="text" name="address" id="address"
                            placeholder="address" required
                        /><br />

                        <div className="CityStateZip">
                            <input value={city}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setCity(e.target.value)
                                }}
                                type="text" name="city" id="city"
                                placeholder="city" required
                            /><br />
                            <input value={state}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setState(e.target.value)
                                }}
                                type="text" name="state" id="state"
                                placeholder="state" required
                            /><br />

                            <input value={zip}
                                onChange={(e) => {
                                    console.log(e.target.value)
                                    setZip(e.target.value)
                                }}
                                type="text" name="zip" id="zip"
                                placeholder="zip" required
                            /><br />
                        </div>

                    </div>

                    <div className="right_column">
                        <br />
                        {/* <h1>order total info</h1> */}
                        {/* <h4>TOTAL: ${orderTotal.toFixed(2)}</h4> */}
                        <div>
                            <span className='label_text'>Subtotal:</span>
                            <span className='price_text'>${orderTotal.toFixed(2)}</span>
                        </div>
                        <div>
                            <span className='label_text'>Shipping:</span>
                            <span className='price_text'>${shipping_cost}</span>
                        </div>
                        <div>
                            <span className='label_text'>Estimated Tax:</span>
                            <span className='price_text'>${taxes}</span>
                        </div>
                        <hr />
                        <div>
                            <b><span className='label_text'>Order Total:</span></b>
                            <b><span className='price_text'>${order_total}</span>   </b>
                        </div>
                        <br /><br />
                        <button >Place Order</button>

                    </div>

                </div>
            </form>

        </div>
    )
}
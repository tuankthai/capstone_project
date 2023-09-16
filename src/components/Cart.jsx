
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from "react";

import '../App.css'
import PurchaseItemBox from './PurchaseItemBox'



export default function Cart() {
    // const [qty, setQty] = useState(0)
    // const [product, setProduct] = useState({})
    const { productId } = useParams();
    const [error, setError] = useState(null)
    const [errormsg, setErrormsg] = useState(null)
    const [bagTotal, setBagTotal] = useState(0)
    const navigate = useNavigate();

    // let bagTotalPrice = 500;

    console.log("Cart: useParams producId: ", productId);
    const item = JSON.parse(localStorage.getItem("item_bought"));
    console.log("item : ", item)

    // const [item_bought, setItem_bought] = useState(item)
    // console.log("item_bought: ", item_bought)
    // let bagTotal = 0;



    //should retrieve the bag from local storage 
    //if token exists, retrieve user bag.  if not, retrieve non user bag
    // update qty if product exists.
    // if not, add object into array
    //if no bag exists in local storage, make new bag and add object into array
    //calculate total of all items in bag.
    const shopping_bag =
    {
        username: "",
        grandTotal: 0,
        totalItems: 0,
        shipping_address: "",
        data: []
    };
    let bag = {};

    const token = localStorage.getItem("token");
    if (token === null) {
        console.log("no, token does not exist. get current user bag or empty bag")
        //not logged in
        bag = localStorage.getItem("shopping_bag");
        if (bag === null) {
            console.log("no non-user bag in local storgage");
            //use brand new shopping bag. save it in local storage
            bag = shopping_bag;
            //convert to json format before saving
            localStorage.setItem("shopping_bag", JSON.stringify(bag));
        } else {
            //use existing bag
            console.log("yes use existing non-user bag in local storgage");
            bag = JSON.parse(localStorage.getItem("shopping_bag"));
            // console.log("before setBag: ", JSON.parse(localStorage.getItem("shopping_bag")) );
        }
        console.log("bag?  ==", bag)
    } else {
        //logged in
        //token exist. get username bag from local storage username_bag
        console.log("yes, token exists. get user bag from local storage")
        const username = localStorage.getItem("username");
        //need to convert from JSON string to object before use
        bag = JSON.parse(localStorage.getItem(`${username}_bag`));
    }

    //now put purchase item in bag.
    //if item exists in bag, update  item's qty and total
    //if not, attach item to array
    //update bag grandTotal, totalItems,
    const item_found = bag.data.find((itemxx) => { return itemxx.id === item.id });
    if (item_found == null) {
        console.log("item not found")
        // bag.data.push(item_bought);
        bag.data.push(item);
    } else {
        console.log("yes item found = ", item_found)
        item_found.qty += 1;
        item_found.total += parseFloat(item_found.price);

    }
    bag.grandTotal += parseFloat(item.price);
    bag.totalItems += 1;
    setBagTotal(prev=>prev+bag.grandTotal) 
    // bagTotal += bag.grandTotal;

    console.log("bag latest update = ", bag)

    return (

        <div className='Cart'>
            <h3>SHOPPING BAG </h3><br />
            <hr />
            {/* loop through the array and display products and qty bought */}
            <div className='column_flex'>
                {bag.data.map((purchaseItem) => {
                    console.log("map purchase item : ", purchaseItem)
                    return <PurchaseItemBox key={purchaseItem.id} purchaseItem={purchaseItem} setBagTotal={ setBagTotal }
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
            <h4>TOTAL: ${bagTotal}</h4>

            <div className='row_flex'>
                <button className='product-button' onClick={() => {
                    localStorage.setItem("shopping_bag", JSON.stringify(bag));

                }} >
                    Check Out</button>
                <button className='product-button' onClick={() => {
                    //save shopping bag in local storage
                    localStorage.setItem("shopping_bag", JSON.stringify(bag));

                    navigate(`/`)

                }} >
                    Continue Shopping</button>
            </div>

        </div>
    )

}

import React from "react";
import '../App.css'
import { useState } from "react";

export default function PurchaseItemBox({ purchaseItem, setBagTotal }) {
// export default function PurchaseItemBox({ purchaseItem, bagTotal }) {
    const [item_bought, setItem_bought] = useState(purchaseItem)

    console.log(" purchaseItem  id: ", purchaseItem.id)
    console.log("item_bought  id: ", item_bought.id)

    return (

        <div className='row_flex'>
            <div className="image_div">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src={item_bought.image} alt={""} width={100} height={100}></img><br />
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="title_div">

                <h4>{item_bought.title}</h4><br />
            </div>

            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div className="price_div">

                <h4> ${item_bought.price}</h4><br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <span onClick={() => {
                    console.log("you click span minus")
                    if (item_bought.qty >= 1) {
                        setItem_bought({
                            ...item_bought, qty: item_bought.qty - 1,
                            total: (item_bought.price * (item_bought.qty - 1))
                        })
                        // bagTotal -= item_bought.price;
                        // setBagTotal(prev => prev - item_bought.price)
                        

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
                    // bagTotal += item_bought.price;
                    // setBagTotal(prev => prev + item_bought.price)

                }}>+</span>
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <h4> ${item_bought.total}</h4><br />
            </div>

        </div>

    );
}

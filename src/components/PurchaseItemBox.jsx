
import React from "react";
import '../App.css'
import { useState } from "react";

export default function PurchaseItemBox({ purchaseItem }) {
    const [item_bought, setItem_bought] = useState(purchaseItem)

    console.log(" purchaseItem  id: ", purchaseItem.id)
    console.log("item_bought  id: ", item_bought.id)

    return (

        <div className='row_flex'>
            
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <img src={item_bought.image} alt={""} width={100} height={100}></img><br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h4>{item_bought.title}</h4><br />
            &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {/* <span style={{ font-size: 1.6rem}}>big font</span> */}
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

            }}>+</span>
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <h4> ${item_bought.total}</h4><br />
        </div>

    );
}

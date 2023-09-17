import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
    const [purchaseItem, setPurchaseItem] = useState({});
    const [cartItems, setCartItems] = useState([]);
    const [username, setUserName] = useState("");
    const [token, setToken] = useState("");
    // const [bagItem, setBagItem] = useState({});
    const [cartTotal, setCartTotal] = useState(0);

    const addToCart = (getItem) => {
        console.log("in addToCart, getItem : ", getItem);

        const item_found = cartItems.find((itemxx) => { return itemxx.id === getItem.id });
        if (item_found == null) {
            console.log("item not found")
            cartItems.push(getItem);
        } else {
            console.log("yes item found = ", item_found)
            item_found.qty += 1;
            item_found.total += parseFloat(item_found.price);
        }
        setCartItems(cartItems)
        setCartTotal(getCartTotal())

    }

    const removeFromCart = (bagItem) => {
        console.log("in removeFromCart, bagItem : ", bagItem);

        const item_found = cartItems.find((itemxx) => { return itemxx.id === bagItem.id });

        const index = cartItems.indexOf(item_found);
        if (index > -1) { // only splice array when item is found
            cartItems.splice(index, 1); // 2nd parameter means remove one item only
            setCartItems(cartItems); //update state
        }

    }

    // const incrementItems = (bagItem) => {
    //         // setBagItem({
    //         //     ...bagItem, qty: bagItem.qty + 1,
    //         //     total: (bagItem.price * (bagItem.qty + 1))
    //         // })
    //     bagItem.qty += 1;
    //     bagItem.total = (bagItem.price * (bagItem.qty + 1 ))

    //     }

    // const decrementItems = (bagItem) => {
    //         // setBagItem({
    //         //     ...bagItem, qty: bagItem.qty - 1,
    //         //     total: (bagItem.price * (bagItem.qty - 1))
    //         // })

    //         bagItem.qty -= 1;
    //         bagItem.total = (bagItem.price * (bagItem.qty - 1))

    //         //if qty === 0 then remove item from bag and update state ... TO DO
    //         if (bagItem.qty === 0) {
    //             const index = cartItems.indexOf(bagItem);
    //             if (index > -1) { // only splice array when item is found
    //                 cartItems.splice(index, 1); // 2nd parameter means remove one item only
    //                 setCartItems(cartItems); //update state
    //             }
    //         }
    //     }

    const updateCart = (bagItem) => {
        console.log("in updateCart, bagItem : ", bagItem);

        // let item_found = cartItems.find((itemxx, index) => { return itemxx.id === bagItem.id && index });
        let item_found = cartItems.find((itemxx) => { return itemxx.id === bagItem.id });
        if (item_found == null) {
            console.log("item not found. impossible to happen!")
        } else {
            console.log("yes item found = ", item_found);
            item_found.qty = bagItem.qty;
            item_found.total = bagItem.total;
            // item_found = { ...item_found, qty: bagItem.qty, total: bagItem.total };           
            // setCartItems({ ...cartItems, cartItems[index]: bagItem })
            setCartItems(cartItems)
            setCartTotal(getCartTotal())
        }
    }

    const getCartTotal = () => {

        let cartTotal = 0;
        cartItems.map((itemY) => {
            console.log("map itemY : ", itemY)
            cartTotal += itemY.total;

        })
        return cartTotal;
    }


    const contextValue = {
        purchaseItem, cartItems, username, token, cartTotal,
        addToCart, removeFromCart, updateCart, getCartTotal
    };

    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}
import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

//for references:
//localStorage.setItem('items', JSON.stringify(items));
//localStorage.getItem('items')

export const ShopContextProvider = (props) => {
    const [me, setMe] = useState('Me')
    const [purchaseItem, setPurchaseItem] = useState({});
    const [cartItems, setCartItems] = useState([]);
    const [username2, setUserName2] = useState("");
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
            // cartTotal += itemY.qty*itemY.price;

        })
        return cartTotal;
    }

    const saveToken = (token) => {
        setToken(token)
    }

    const saveUsername = (username) => {
        setUserName2(username)
    }

    const clearToken = () => {
        setToken("")
    }

    const clearUsername = () => {
        setUserName2("")
    }

    const joinTwoCarts = (restoredCart) => {

        restoredCart.forEach((itemyy) => {
            // console.log(itemyy);
            //check to see if item already exists in currently used cart
            let idx = cartItems.findIndex((itemxx) => { return itemxx.id === itemyy.id });
            (idx != -1) ? 
                setCartItems(prev => [...prev, prev[idx].qty++]) :
                setCartItems(prev => [...prev, itemyy])
        });
    }

    console.log("after updating", cartItems)


    const retrieveCart = (username) => {
        //get cart from local storage
        //convert from json to js obj
        const restoredCart = JSON.parse(localStorage.getItem(`${username}`));
        console.log("restoredCart = ", restoredCart)

        restoredCart && (cartItems.length ?
            joinTwoCarts(restoredCart)
            :
            setCartItems(restoredCart))

        //update # of items in cart on navbar ... TO DO
    }

    const persistCart = () => {
        //if currently used cart is non-empty, persist cart to localstorage 
        cartItems.length && localStorage.setItem(`${username2}`, JSON.stringify(cartItems));
        //update # of items to zero in cart in navbar ...TO DO
    }

    const isTokenExist = () => {
        console.log("token = ", token)
        return token.length ? true : false
    }

    const clearCart = () => {

        setCartItems([]);

    }

    const clearCartInLocalStorage = () => {
        localStorage.removeItem(`${username2}`)

    }

    const contextValue = {
        purchaseItem, cartItems, token, cartTotal, me,
        addToCart, removeFromCart, updateCart, getCartTotal, saveToken, saveUsername, clearToken, clearUsername,
        isTokenExist, persistCart, clearCart, retrieveCart, clearCartInLocalStorage
    };

    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}
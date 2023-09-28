import React, { createContext, useState } from "react";

export const ShopContext = createContext(null);

//for references:
//localStorage.setItem('items', JSON.stringify(items));
//localStorage.getItem('items')
//localStorage.removeItem('items')

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState([]);
    const [username2, setUserName2] = useState("");
    const [token, setToken] = useState("");

    const addToCart = (getItem) => {
        console.log("in addToCart, getItem : ", getItem);

        const index = cartItems.findIndex(x => x.id === getItem.id);
        if (index === -1) {
            console.log("item not found")
            const newState = [...cartItems, getItem] 
            setCartItems(newState)
        } else {
            console.log("item found")
            const newState = [...cartItems];
            newState[index] = {
                ...newState[index],
                qty: newState[index].qty + 1,
            }
            setCartItems(newState);
        }
    }

    const getCartTotal = () => {

        let cartTotal = 0;
        cartItems.map((itemY) => {
            // console.log("map itemY : ", itemY)
            cartTotal += itemY.qty*itemY.price;

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

    //tier two project.  code is not working yet .....TO DO
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

    const retrieveCart = (username) => {
        const restoredCart = JSON.parse(localStorage.getItem(`${username}`));
        console.log("restoredCart = ", restoredCart)
        restoredCart !== null && setCartItems(restoredCart);
        
        //tier two project. merge current cart with local storage cart ...TO DO...
        // restoredCart && (cartItems.length ?
        //     joinTwoCarts(restoredCart)
        //     :
        //     setCartItems(restoredCart))

        //update # of items in cart on navbar ... TO DO...
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
        cartItems, token,  setCartItems,
        addToCart, getCartTotal, saveToken, saveUsername, clearToken, clearUsername,
        isTokenExist, persistCart, clearCart, retrieveCart, clearCartInLocalStorage
    };

    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}
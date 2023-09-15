import { useEffect, useState } from "react";
import React from "react";

import Nav from './Nav'
import ProductBox from './ProductBox'
import DropDownMenu from './DropDownMenu'
import FilterDropDownMenu from './FilterDropDownMenu'

import '../App.css'

const BASE_URL = "https://fakestoreapi.com";

import { useNavigate } from "react-router-dom";



export default function Home() {
    const [allproducts, setAllproducts] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])
    const navigate = useNavigate();

    useEffect(() => {

        const fetchproducts = async () => {
            try {
                const response = await fetch(`${BASE_URL}/products`)

                const result = await response.json();
                console.log(result);
                console.log("products = ", result);
                setAllproducts(result)
                setDisplayProducts(result)
            } catch (err) {
                console.error(err);
            }
        }
        fetchproducts()

    }, [])

    console.log("all products = ", allproducts)
    console.log("all display products = ", displayProducts)

    return (
        <div>
            <Nav />

            <div className='menuOption'>
                <div className='alignFilterDropDown'>
                    <FilterDropDownMenu />
                </div>

                <div className='alignDropDown'>
                    <DropDownMenu />
                </div>
            </div>

            <br />
            {/* <h1>Welcome to Macy's Store</h1> */}
            <div className='list-all-products'>
                {displayProducts.map((product) => {
                    console.log("map product: ", product)
                    return <ProductBox key={product._id} product={product}
                    />;

                })}
            </div>

        </div>
    )
}
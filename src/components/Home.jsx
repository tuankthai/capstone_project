import { useEffect, useState } from "react";
import React from "react";

import Nav from './Nav'
import ProductBox from './ProductBox'
import DropDownMenu from './DropDownMenu'
import NavLogout from "./NavLogout";

// import { Link } from "react-router-dom";
// import Product from "./Product";

import '../App.css'

const BASE_URL = "https://fakestoreapi.com";

import { useNavigate } from "react-router-dom";

import { useContext } from "react"
import { ShopContext } from '../context/shop-context';


export default function Home() {
    const [search, setSearch] = useState("")
    const [allCategories, setAllCategories] = useState([])
    const [allproducts, setAllproducts] = useState([])
    const [displayProducts, setDisplayProducts] = useState([])
    const navigate = useNavigate();
    const { isTokenExist } = useContext(ShopContext);

    console.log("in home page")

    function handleDropDown(sortValue) {
        // console.log("in handleDropDown, sortValue=", sortValue)
        if (sortValue === "one") {
            const sorted = displayProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
            console.log("sorted = ", sorted)
            setDisplayProducts(sorted);

            // setDisplayProducts(prev => {
            //     let sorted = prev.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
            //     console.log("sorted = ", sorted)
            //     return sorted
            // })
        } else {
            const sorted = displayProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
            console.log("sorted = ", sorted)
            setDisplayProducts(sorted);

            // setSortedProducts(prev => {
            //     let sorted = prev.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
            //     console.log("sorted = ", sorted)
            //     return sorted
            // })
        }
    }

    // console.log("displayProducts = ", displayProducts)

    function filterSearchText(searchText) {
        console.log("in filterSearchText, searchText = ", searchText)
        setDisplayProducts(allproducts.filter(function (product) {
            //find product has text containing search text
            return product.title.includes(searchText)
                | product.description.includes(searchText)
        }));

    }

    function filterCategory(e, category) {
        console.log("in filterCategory, selected category = ", category)

        setDisplayProducts(allproducts.filter(function (product) {
            //find product has the selected category
            return product.category === category
        }));

    }

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

        const fetchCategories = async () => {
            try {
                const response = await fetch(`${BASE_URL}/products/categories`)

                const result = await response.json();
                console.log(result);
                console.log("categories = ", result);
                setAllCategories(result)
            } catch (err) {
                console.error(err);
            }
        }

        fetchproducts()
        fetchCategories()

    }, [])

    // console.log("all categories = ", allCategories)
    // console.log("all products = ", allproducts)
    // console.log("all display products = ", displayProducts)
    // console.log("isTokenExist = ", isTokenExist())
    console.log("test sorting, ", displayProducts)

    return (
        <div>
            {isTokenExist() ? <NavLogout /> : <Nav />}
            {/* <hr /> */}
            <div className="postline"></div>
            <div className='menuOption'>
                <form action="">

                    <input value={search}
                        onChange={(e) => {
                            console.log(e.target.value)
                            setSearch(e.target.value)
                            filterSearchText(e.target.value);
                        }}
                        type="text" name="search" id="search"
                        placeholder="search" required
                    /><br />
                </form>

                <div className='alignDropDown'>
                    <DropDownMenu setDisplayProducts={setDisplayProducts}  />
                </div>

                {/* <label htmlFor="status"> <b>{"Sort   "}</b>
                    <select id="sort" name="sort" required
                        onChange={(e) => { handleDropDown(e.target.value) }}
                    >
                        <option value="one">Price low to high</option>
                        <option value="two">Price high to low</option>
                    </select>

                </label> */}
            </div>

            <div className="list-all-categories">
                {allCategories.map((cat) => {
                    // console.log("map category: ", cat)
                    return <b> < p onClick={(e) => { filterCategory(e, cat) }}> {cat}</p></b>
                })}
            </div>
            {/* <hr /> */}
            <div className='list-all-products'>
                {displayProducts.map((product) => {
                    // console.log("map product: ", product)
                    return <ProductBox key={product._id} product={product} />;

                })}
            </div>
        </div>
    )
}
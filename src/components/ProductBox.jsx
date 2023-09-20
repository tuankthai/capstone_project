
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import Product from "./Product";


export default function ProductBox({ product }) {

    console.log("product box id: ", product.id)
    console.log("product literal template: ", `/Product/${product.id}`)

    return (
        <div className="productClass">
            <Link to={`/Product/${product.id}`}>
                <img src={product.image} alt={product.title} width={100}  ></img>
            </Link>
            <br />
            <h4>{product.title}</h4>
            <h4>price: ${product.price}</h4>
            <h4>Rating: {product.rating.rate} ({product.rating.count})</h4>
            <h4>Category: {product.category}</h4>
            <br />
            
        </div>

    );
}

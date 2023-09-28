
import '../App.css'
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';
import { useContext } from "react";

export default function NavLogout() {
    const { itemsCount } = useContext(ShopContext);

    return (
        <div className='navbar'>
            {/* <div className='links'> */}
            {/* <a href="/image">Image</a> */}

            {/* <span id="logo">Macy's</span>

                <Link to="/Logout">Logout</Link>
                <Link to="/Cart">Cart</Link> */}
            <p>Yacy's</p>
            {/* </Link> */}

            <Link to="/Logout"  className='navbarlinks'>
                <p > Logout</p>
            </Link>

            <Link to="/Cart" className='navbarlinks'>
                {/* <p >Cart </p> */}
                <p >Cart({itemsCount}) </p>
            </Link>


            {/* </div> */}
        </div>

    )
}   
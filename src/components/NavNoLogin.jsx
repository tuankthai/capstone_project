
import '../App.css'
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';
import { useContext } from "react";

export default function  NavNoLogin() {
    const { itemsCount } = useContext(ShopContext);

    return (
        <div className='navbar'>
            
            <p>Yacy's</p>
            {/* </Link> */}

            {/* <Link to="/Logout"  className='navbarlinks'>
                <p > Logout</p>
            </Link> */}

            <Link to="/Cart" className='navbarlinks'>
                {/* <p >Cart </p> */}
                <p >Cart({itemsCount}) </p>
            </Link>

        </div>

    )
}   
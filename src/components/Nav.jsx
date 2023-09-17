
import '../App.css'
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='navbar'>
            <div className='links'>
            {/* <nav > */}
                {/* <a href="/image">Image</a> */}

                <span id="logo">Macy's</span>
                {/* <a href="/">HOME</a> */}
                {/* <a href="/Login" id="a">Login </a> */}
                {/* <a href="/Cart" id="a">Cart</a> */}

                <Link to="/Login">Login</Link>
                <Link to="/Cart">Cart</Link>
            {/* </nav> */}
            </div>
        </div>

    )
}
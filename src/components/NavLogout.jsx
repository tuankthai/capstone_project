
import '../App.css'
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';

export default function NavLogout() {
    return (
        <div className='navbar'>
            <div className='links'>
                {/* <a href="/image">Image</a> */}

                <span id="logo">Macy's</span>

                <Link to="/Logout">Logout</Link>
                <Link to="/Cart">Cart</Link>
                
            </div>
        </div>

    )
}
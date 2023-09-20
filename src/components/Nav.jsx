
import '../App.css'
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='navbar'>
            <div className='links'>
                {/* <a href="/image">Image</a> */}

                <span id="logo">Macy's</span>

                <Link to="/Login?src=navbar">Login</Link>
                <Link to="/Cart">Cart</Link>
                
            </div>
        </div>

    )
}
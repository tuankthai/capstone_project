
import '../App.css'
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='navbar'>
            {/* <div className='links'> */}
            {/* <a href="/image">Image</a> */}

            {/* <span id="logo">Macy's</span> */}
            {/* <span id="logo">Macy's</span> */}
            {/* <Link to=""> */}
            <p>Macy's</p>
            {/* </Link> */}

            {/* <p className='loginlinks'> Login</p>                     */}
            <Link to="/Login?src=navbar" className='navbarlinks'>
                <p> Login</p>
            </Link>

            <Link to="/Cart" className='navbarlinks'>
                <p >Cart </p>
            </Link>

            {/* </div> */}
        </div>

    )
}

import '../App.css'
import { ShopContext } from '../context/shop-context';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div className='navbar'>

            <p>Macy's</p>

            <Link to="/Login?src=navbar" className='navbarlinks'>
                <p> Login</p>
            </Link>

            <Link to="/Cart" className='navbarlinks'>
                <p >Cart </p>
            </Link>

        </div>

    )
}
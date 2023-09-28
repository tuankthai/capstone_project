import '../App.css'
import { useNavigate } from "react-router-dom";
import NavLogout from "./NavLogout";
import Nav from './Nav'
import { useContext } from "react"
import { ShopContext } from '../context/shop-context';
import thankyou from '../assets/animated-thank-you.gif'

export default function Thankyou() {
    const navigate = useNavigate();
    const { isTokenExist } = useContext(ShopContext);

    async function handleDone(e) {
        // e.preventDefault();
        console.log("hello handleDone")
        navigate(`/`)

    }

    return (
        <div>
            {isTokenExist() ? <NavLogout /> : <Nav />}
            <div className="postline"></div>

            <div className="thankyou_div">
                <img src={thankyou} alt="thankyou" height={300} />
                <div className='filler_div'></div>
                <br /><br /><br />
                {/* <div className='note_div'> */}
                <h6>  Thank you for placing the order with Yacy's</h6>
                {/* </div> */}
                <button onClick={(e) => { handleDone(e) }}>Continue Shopping</button>
                <div className='filler_div'></div>
            </div>
            <br /><br /><br />
        </div>
    )
}
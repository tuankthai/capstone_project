import { useContext, useEffect } from "react"
import { ShopContext } from '../context/shop-context';
import { useNavigate } from "react-router-dom";


export default function Logout() {
    const { clearToken, clearUsername, persistCart } = useContext(ShopContext);
    const navigate = useNavigate();

    //if token exists, persists shopping cart to local storage if user did not check out
    //finally, clear token and username from useContext
    persistCart()
    clearToken()
    clearUsername()
    useEffect(() => {
        navigate(`/`);
    }, [])

    return (
        <div>

        </div>
    )
}
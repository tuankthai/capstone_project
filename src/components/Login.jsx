
// import Nav from './Nav'

import React from "react"
import { useState , useContext} from "react"
import './Login.css'
import { ShopContext } from '../context/shop-context';

const BASE_URL = "https://fakestoreapi.com";

import { useNavigate } from "react-router-dom";
// import Nav from './Nav'

export default function Login({ setToken }) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(null)
    const [errormsg, setErrormsg] = useState(null)
    const navigate = useNavigate();
    const { saveToken, saveUsername } = useContext(ShopContext);
    let src = "";

    console.log("in Login")

    const searchParams = new URLSearchParams(window.location.search);
    console.log(searchParams.has('src'));
    //it has src query string, 
    //  Login?src=navbar means from nav bar.   Login?src=checkout means from checkout.
    // it guides Login which page to navigate to next
    if (searchParams.has('src')) {
        console.log(searchParams.get('src'))
        src = searchParams.get('src');
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("hello login handleSubmit")

        try {

            const response = await fetch(`${BASE_URL}/auth/login`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(
                        {
                            // username: `${username}`,
                            // password: `${password}`
                            username, password
                        }
                    ),

                }
            );
            console.log("response: ", response)

            const result = await response.json();
            console.log("after json: result", result);
            console.log("after json: result.token ", result.token);

            //save token in useContext  TO DO ....
            saveToken(result.token)
            saveUsername(username)

            //clear input form fields
            setUsername("")
            setPassword("")

            // navigate(`/Profile?src=profile`);
            src.includes("navbar") ? navigate(`/`) : navigate(`/Checkout`);            

        } catch (error) {
            console.log("error: ", error)
            setError(error.message)
            setErrormsg("Invalid username or passord.")
        }
    }

    return (
        <div className="login_page_div">
            {/* <Nav /> */}
            {/* <h3 id="form-h3">Macy's</h3><br></br> */}
            <h3 >Macy's</h3><br></br>

            <form onSubmit={handleSubmit}>
                <label htmlFor="username"> User Name </label><br />

                <input value={username}
                    onChange={(e) => {
                        console.log(e.target.value)
                        setUsername(e.target.value)
                    }}
                    type="text" name="username" id="username"
                    placeholder="username" required
                />
                <br /><br />

                <label htmlFor="password"> Password </label><br />
                <input value={password} onChange={(e) => {
                    console.log(e.target.value)
                    setPassword(e.target.value)
                }}
                    type="text" name="password" id="password" placeholder="password" required
                />
                <br /><br />
                <button >Login</button>
            </form>

            <h4>{errormsg}</h4>
        </div>
    )
}

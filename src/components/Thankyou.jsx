import '../App.css'
import { useNavigate } from "react-router-dom";


export default function Thankyou() {
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("hello login handleSubmit")
        navigate(`/`)

    }

    return (
        <div className="header_div">
            <form onSubmit={handleSubmit}>

            <h1>
                Thank you for placing the order
                </h1>
                <button >Done</button>
            </form>
        </div>
    )
}
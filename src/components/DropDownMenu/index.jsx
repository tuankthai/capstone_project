import Dropdown from 'react-bootstrap/Dropdown';
import "./index.css"

function DropDownMenu({ setDisplayProducts }) {

    function handleDropDown(msg) {
        // console.log(e)
        console.log(msg)
        if (msg=="one") {
            setDisplayProducts(prev => {
                
                let sorted = prev.sort((a, b) => a.price - b.price)
                console.log(sorted)
                return sorted
            })
        } else {
            setDisplayProducts(prev => {
                let sorted = prev.sort((a, b) => b.price - a.price)
                console.log(sorted)
                return sorted
            })
       }
            // setDisplayProducts(prev=>prev.sort(function (a, b) {
            //     console.log("sort price ascending")
            //     // return parseFloat(a.price) - parseFloat(b.price)
            //     return a.price -  b.price
            // }))
            
            
            // setDisplayProducts(prev=>prev.sort(function (a,b) {
            //     console.log("sort price descending")
            //     // return parseFloat(b.price) - parseFloat(a.price)
            //     return b.price - a.price
            // }))
            // setDisplayProducts(prev => {
            //     let sorted = prev.sort((a, b) => b.price - a.price)
            //     return sorted
            // })
        console.log('Testtttttt')
    }

    return (
        // <Dropdown id="dropdown">
        <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={(e) => handleDropDown("one")}>Price low to high</Dropdown.Item>
                <Dropdown.Item onClick={(e) => handleDropDown("two")}>Price high to low</Dropdown.Item>
                {/* <Dropdown.Item onClick={(e) => handleDropDown(e, "three")}>Customer Ratings high to low</Dropdown.Item> */}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownMenu;
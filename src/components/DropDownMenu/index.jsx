import Dropdown from 'react-bootstrap/Dropdown';
import "./index.css"

function DropDownMenu() {

    function handleDropDown(e, msg) {
        console.log(e)
        console.log(msg)

    }

   
    return (
        // <Dropdown id="dropdown">
        <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Sort
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={(e)=>handleDropDown(e, "one")}>Price low to high</Dropdown.Item>
                <Dropdown.Item onClick={(e)=>handleDropDown(e, "two")}>Price high to low</Dropdown.Item>
                {/* <Dropdown.Item onClick={(e) => handleDropDown(e, "three")}>Customer Ratings high to low</Dropdown.Item> */}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default DropDownMenu;
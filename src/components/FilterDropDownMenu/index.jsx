import Dropdown from 'react-bootstrap/Dropdown';
import "./index.css"

function FilterDropDownMenu() {

    function handleDropDown(e, msg) {
        console.log(e)
        console.log(msg)

    }

   
    return (
        // <Dropdown id="dropdown">
        <Dropdown >
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Filter by
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item onClick={(e) => handleDropDown(e, "none")}>Clear all filters</Dropdown.Item>
                <Dropdown.Item onClick={(e)=>handleDropDown(e, "one")}>Price under 300</Dropdown.Item>
                <Dropdown.Item onClick={(e)=>handleDropDown(e, "two")}>Price under 200</Dropdown.Item>
                <Dropdown.Item onClick={(e)=>handleDropDown(e, "three")}>Price under 100</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default FilterDropDownMenu;  
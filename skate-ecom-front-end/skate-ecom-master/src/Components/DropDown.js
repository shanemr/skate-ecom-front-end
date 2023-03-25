import React from "react"
import { useState } from "react";
import { Dropdown,DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap';
import '../Styles/Header.css'

const DropDown = (props) =>{
    const[dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const[dropDownItems, setDropDownItems] = useState(props.items)

    const hadleNav = () =>{

    }
    return(
      <div>
      <Dropdown key={props.type} className='dropdown' isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
        <DropdownToggle className="dropdown-title" color='none'>{props.type}</DropdownToggle>
        <DropdownMenu >
            <DropdownItem header>------Brands------</DropdownItem>
            { dropDownItems ? 
                dropDownItems.map( item => {
                    return(
                        <DropdownItem  className='header-bar-item-dropdown' onClick={hadleNav(item)}>{item}</DropdownItem>
                    ) 
                })
            : null}
        </DropdownMenu>
      </Dropdown>
    </div>
    
    )
  }

  export default DropDown;
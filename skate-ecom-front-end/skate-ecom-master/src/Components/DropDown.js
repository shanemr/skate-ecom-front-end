import React from "react"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Dropdown,DropdownMenu, DropdownItem, DropdownToggle} from 'reactstrap';
import '../Styles/Header.css'
import { Link } from "react-router-dom";

const DropDown = (props) =>{
    const[dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen((prevState) => !prevState);
    const[dropDownItems, setDropDownItems] = useState(props.items)
    const nav = useNavigate();


    function handleNav(item) {
      if(item === "SkateBoard Decks"){
        item = "Decks"
      }
      
      nav('/products/' + item );
    }

    
    return(
      <div>
      <Dropdown key={props.type} className='dropdown' isOpen={dropdownOpen} toggle={toggle} direction={"down"}>
        <DropdownToggle className="dropdown-title" color='none'>{props.type}</DropdownToggle>
        <DropdownMenu style={{width:'300px'}}>
            <DropdownItem header key={'header'}>------Categories------</DropdownItem>
            { dropDownItems ? 
                dropDownItems.map( item => {
                    return(
                        <DropdownItem  key={item}className='header-bar-item-dropdown' onClick={() => handleNav(item)}>{item}</DropdownItem>
                    ) 
                })
            : null}
        </DropdownMenu>
      </Dropdown>
    </div>
    
    )
  }

  export default DropDown;
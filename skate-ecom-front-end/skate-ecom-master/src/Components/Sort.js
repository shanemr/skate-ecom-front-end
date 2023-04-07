import React, {useState} from 'react'
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Button} from 'reactstrap';
import '../Styles/Sort.css'


function Sort({products, type, setFilter, filterType}){
    
    const[brandDropdownOpen, setBrandDropdownOpen] = useState(false);
    const brandToggle = () => setBrandDropdownOpen((prevState) => !prevState);
    const[colorDropdownOpen, setColorDropdownOpen] = useState(false);
    const colorToggle = () => setColorDropdownOpen((prevState) => !prevState);
    const[sizeDropdownOpen, setSizeDropdownOpen] = useState(false);
    const sizeToggle = () => setSizeDropdownOpen((prevState) => !prevState);

    let brandSet = new Set();
    let colorSet = new Set();
    let sizeSet = new Set();
    
    const findUniqueBrands = (vals) =>{
        vals.forEach(element => {
            brandSet.add(element.brandName)
        });
        let brands = Array.from(brandSet).map(p =>{
            return(
                <DropdownItem key={p} className="sort-dropdown-item" onClick={setFilter('brand', {p})}>{p}</DropdownItem>
            )
        })
        return brands;
    }

    const findUniqueColors = (vals) =>{
        vals.forEach(element => {
            colorSet.add(element.color)
        });
      let colors = Array.from(colorSet).map(p =>{
            return(
                <DropdownItem key={p} className="sort-dropdown-item" onClick={setFilter('color', {p})}>{p}</DropdownItem>
            )
        })
        return colors;
    }

    const findUniqueSizes = (vals) =>{
        vals.forEach(element => {
            sizeSet.add(element.size)
        });
      let sizes = Array.from(sizeSet).map(p =>{
            return(
                <DropdownItem key={p}  className="sort-dropdown-item" onClick={setFilter('size', {p})}>{p}</DropdownItem>
            )
        })
        return sizes;
    }


    return(
        <div className='main-sort-container'>
            <div className='sort-header'>
                <h5>Filter By:    
                    <span style={{fontWeight:'400', marginLeft:'2%'}}> {filterType ? filterType : null}</span>
                </h5>
            </div>
            <Dropdown className='sort-dropdown' isOpen={brandDropdownOpen} toggle={brandToggle} direction={"down"}>
                <DropdownToggle className="sort-dropdown-header" color='none'>Brand</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>------Brands------</DropdownItem>
                    {products ? 
                        findUniqueBrands(products)
                    : null}
                </DropdownMenu>
            </Dropdown>
            {type === 'Decks' ? 
            <Dropdown className='sort-dropdown' isOpen={colorDropdownOpen} toggle={colorToggle} direction={"down"}>
                <DropdownToggle className="sort-dropdown-header" color='none'>Color</DropdownToggle>
                <DropdownMenu >
                    <DropdownItem  header>------Colors------</DropdownItem>
                    {products ? 
                        findUniqueColors(products)
                    : null}
                </DropdownMenu>
            </Dropdown>
            : null}
            {type === 'Decks' || type === 'Wheels' ? 
            <Dropdown className='sort-dropdown'isOpen={sizeDropdownOpen} toggle={sizeToggle} direction={"down"} >
                <DropdownToggle className="sort-dropdown-header" color='none'>Size</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem header>------Sizes------</DropdownItem>
                    {products ? 
                        findUniqueSizes(products)
                    : null}
                </DropdownMenu>
            </Dropdown>
            : null}
            <Button onClick={setFilter()} style={{width:'50%', marginTop:'5%', alignSelf:'center'}}>Reset filter</Button>
        </div>
    )
}

export default Sort;
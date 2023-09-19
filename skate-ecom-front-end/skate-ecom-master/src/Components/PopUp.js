import React from "react";
import "../Styles/PopUp.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {addToCart} from '../Actions/Actions'
import { useDispatch } from 'react-redux';
import { Button, Input, Label, ListGroup, ListGroupItem, ListGroupItemHeading} from "reactstrap";
import { Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function PopUp({status,product,handlePopUp}){

    const nav = useNavigate();
    const dispatch = useDispatch();
    const[qty, setQty] = useState(1);
    const[modalShow, setModalShow] = useState(false);
    
    const handleAddToCart =(event) =>{
        event.preventDefault();
        dispatch(addToCart(product, Number(qty)));
        handleModalShow(true);
        
    }

    const navToCart = () =>{
        nav('/cart');
    }

    const handleQtyChange = (e) =>{
        setQty(e.target.value);
    }

    const handleModalShow = (val) =>{
        setModalShow(val);
     
    }

   

    return(
        <div className="popup-container">
            {status ? 
            <Modal isOpen={status} centered >
            <div isOpen={true} className="popup-body" >
                <div id='' className='popup-header'>
                <h5 style={{alignSelf:'flex-start', marginLeft:'5%'}}>{product.brandName} Skateboard</h5>
                <Button onClick={() => handlePopUp(false)} color='none' style={{color:'black', fontWeight:'bold', alignSelf:'flex-end'}}>X</Button>
                </div>
                <div id='product-info' className='product-popup-info'>
                    <img src={product.imageUrl} alt={product.brandName} className={product.imageUrl.includes('decks') ? "product-image-popup-decks" : "product-image-popup" }/>
                
                    <div id='product-features' className='product-details'>
                       <ListGroup >
                        <ListGroupItemHeading >Features:  </ListGroupItemHeading>
                            <ListGroupItem style={{ backgroundColor:'#F9F9F9', fontWeight:'bold'}}>Shape:  Popsicle</ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'#F9F9F9', fontWeight:'bold'}}>Deck Construction: Traditional Maple</ListGroupItem>
                            <ListGroupItem style={{backgroundColor:'#F9F9F9', fontWeight:'bold'}}>8.5" Width x 32" Length - Wheelbase: 14.25"</ListGroupItem>
                       </ListGroup>
                       <br/>
                       <ListGroup >
                        <ListGroupItemHeading>Price:</ListGroupItemHeading>
                            <ListGroupItem style={{fontWeight:'bold', border:'none', backgroundColor:'#F9F9F9'}}>${product.price.toFixed(2)}</ListGroupItem>  
                       </ListGroup>
                    </div> 
                </div>
                <div className="popup-buttons">
                    <div style={{display:'flex', gap:'5%', justifyContent:'center'}}>
                        <Label for='qty' size='lg'>Qty:</Label>
                        <Input type='number' id='qty' value={qty} min={1} max={50} onChange={handleQtyChange} style={{width:'50%'}}></Input>
                    </div>
                    <Button color='none' 
                            size='md' 
                            style={{width:'80%', color:'white',marginTop:'5%', fontWeight:'bold', backgroundColor:'black'}}
                            onClick={handleAddToCart}
                    >
                        Add to cart
                    </Button>
             
                </div>
            </div>
            </Modal>
            : null}
            { modalShow ? 
                   <Modal isOpen={modalShow} onHide={() => handleModalShow(true)} animation={false} centered>
                   <ModalHeader closeButton>
                        Success!
                   </ModalHeader>
                   <ModalBody>
                    {qty > 1 ? <p>{qty} items have been added to your cart!</p> : <p>{qty} item has been added to your cart!</p>}
                    </ModalBody>
                   <ModalFooter>
                     <Button color="danger" onClick={() => handleModalShow(false)}>
                       Close
                     </Button>
                     <Button color="black" onClick={navToCart}>
                       View Cart
                     </Button>
                   </ModalFooter>
                 </Modal>
                    : null
                }
        </div>
    )
}

export default PopUp;

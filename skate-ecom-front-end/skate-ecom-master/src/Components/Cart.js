import { React } from "react";
import { Button, Table, Input} from "reactstrap";
import CartProduct from "./CartProduct";
import '../Styles/Cart.css'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../Actions/Actions";


function Cart(props){
    const numCartItems = useSelector((state) => state.CartReducer.numItemsInCart);
    const cartItems = useSelector((state) => state.CartReducer.cartItems);
    const total = useSelector((state) => state.CartReducer.total);
    const nav = useNavigate();
    const dispatch = useDispatch();
    const leftArrow = '/images/left-arrow.png';
    const leftArrowWhite = '/images/left-arrow-white.png';
    const rightArrow = '/images/right-arrow.png';
    
    const handleCheckoutButton = () =>{
        nav('/checkout');
    }

    const handleKeepShopingBtn = () => {
        nav(-1 !== '/login' ? -1 : '/cart');
        
    }

    const handleClearCart = () =>{
        dispatch(clearCart());
    }

    return(
        <div className='cart-container'>
            <div className='cart-box' id='first-div'>
                {cartItems.length >= 1 ? 
                <div className='cart-headers'>
                    <div className='cart-header'>
                    <h2>Cart Summary {'('}{numCartItems}{')'}</h2>
                    <Button color='none' className='keep-shopping-btn' onClick={handleKeepShopingBtn}>
                        <img className='left-arrow' src={leftArrow} alt='left arrow'/>
                        Keep Shopping
                    </Button>
                    </div>
                    <div className='cart-items-container'>
                        <Table borderless>
                            <thead>
                                <tr>
                                    <th style={{width:'20%'}}>
                                        Product
                                    </th>
                                    <th style={{width:'20%'}}>
                                        Price
                                    </th>
                                    <th style={{width:'20%'}}>
                                        Quantity
                                    </th>
                                    <th style={{width:'20%'}}>
                                        Subtotal
                                    </th>
                                    <th style={{width:'20%'}}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems.length >= 1 ? 
                                cartItems.map(p =>{
                                    return(
                                        <CartProduct key={p.description} product={p}/>
                                    )
                                    })
                                    : null}
                            </tbody>
                        </Table>
                        <Button onClick={handleClearCart}>Clear Cart</Button>
                    </div>
                            
                </div>
                    : 
                <div className='empty-cart'>
                <h2 style={{alignSelf:'center', justifySelf:'center', marginTop:'20%'}}>Your cart is empty!</h2>
                <Button color='none' className='keep-shopping-btn' style={{alignSelf:'center',color:'white', backgroundColor:'black'}} onClick={handleKeepShopingBtn}>
                        <img className='left-arrow' src={leftArrowWhite} alt='left arrow'/>
                         Keep Shopping
                </Button>
                </div>
                }
            </div>
            {cartItems.length >= 1 ? 
            <div className="check-out" id='second-div'>
                <h4 style={{marginBottom:'10%', borderBottom:'2px solid black', width:'60%', padding:'2%'}}>Order Summary</h4>
                <span style={{marginBottom:'10%'}}>Shipping and taxes calculated at check out</span>
                <p style={{width:'120%'}}>------------------ 
                   <span style={{fontWeight:'bold'}}>{' Discount Code '}</span> 
                ------------------</p>
                <div style={{display:'flex', alignItems:'center', justifyContent:'center',hieght:'100%', gap:'1%', marginBottom:'5%'}}>
                    <Input type='input' placeholder="Enter code"  style={{width:'60%'}}/>
                    <Button style={{display:'block',color:'white', backgroundColor:'black', width:'40%', fontWeight:'bold', padding:'2%'}}>Apply</Button>
               </div> 
                <p className='order-total-tag' >
                    --------------------<span style={{fontWeight:'bold'}}>{' Cart Total '}</span>--------------------
                </p>
                <p style={{fontWeight:'bold'}}>${total.toFixed(2)}</p>
                <div className='button-container'>
                    <Button color='warning' className='check-out-btn' onClick={handleCheckoutButton}>
                        Secure Checkout
                        <img className='right-arrow' src={rightArrow} alt='right arrow'/>
                    </Button>
                </div>
            </div>
            : null}
        </div>
    )
}

export default Cart;
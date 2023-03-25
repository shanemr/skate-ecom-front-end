import { React } from "react";
import { Button } from "reactstrap";
import CartProduct from "./CartProduct";
import '../Styles/Cart.css'
import { useDispatch, useSelector } from "react-redux";



function Cart(){
    //const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.CartReducer.cartItems);
    const total = useSelector((state) => state.CartReducer.total);
    

    return(
        
        <div className='cart-container'>
            <div className='cart-box'>
                <h2>Cart Summary</h2>
                {cartItems.length >= 1 ? 
                    cartItems.map(p =>{
                        return(
                            <CartProduct key={p.brandId} product={p}/>
                        )
                    })
                : <h5>Cart is empty</h5>}  
                <div className="check-out">
                    <span>Shipping and taxes calculated at check out</span>
                    <p className='order-total-tag' style={{fontWeight:'bold'}}>Order Total = ${total.toFixed(2)} </p>
                    <Button color='warning' className='check-out-btn'>Checkout</Button>
                </div>
            </div>
            
        </div>
    )
}

export default Cart;
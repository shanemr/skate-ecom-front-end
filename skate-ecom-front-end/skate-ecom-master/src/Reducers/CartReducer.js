

const CartReducer =(state={cartItems: [], total:0},action) =>{
    
    let newCart;
    let itemExists = state.cartItems.filter(i => i.brandId === action.product.brandId)
    switch (action.type) {
        case 'GET_CART':
            return state;
        case 'ADD_TO_CART':
            if(itemExists.length >= 1){
                newCart = {
                    ...state, 
                        cartItems: state.cartItems.map(
                            (prod) => prod.brandId === action.product.brandId ? 
                                    {...prod, purchaseQuantity: itemExists[0].purchaseQuantity + 1}
                                   : prod
                    ),
                            total: (state.total + action.product.price)
                }
            } else{
                newCart = Object.assign({}, state,{
                    cartItems:[...state.cartItems, action.product],
                    total: (state.total + action.product.price)
                })
            } 
            return newCart;
        case 'REMOVE_FROM_CART':
            console.log('purchase quantity', action.product.purchaseQuantity)
            if(itemExists.length >= 1 && action.product.purchaseQuantity >= 2){
                newCart = {
                    ...state, 
                        cartItems: state.cartItems.map(
                            (prod) => prod.brandId === action.product.brandId ? 
                                    {...prod, purchaseQuantity: itemExists[0].purchaseQuantity - 1}
                                   : prod
                    ),
                    total: (state.total - action.product.price)
                }
            } else{
                newCart = {
                    ...state,
                        cartItems: state.cartItems.filter(prod => prod.brandId !== action.product.brandId),
                        total: (state.total - action.product.price)
                }
            }        
            return newCart;
        case 'REMOVE_ALL_FROM_CART':
            newCart = {
                ...state,
                    cartItems: state.cartItems.filter(prod => prod.brandId !== action.product.brandId),
                    total: state.total.toFixed(2) - +(action.product.price * action.product.purchaseQuantity).toFixed(2)
            }
            return newCart;
        case 'CLEAR_CART':
            newCart ={}
            return newCart;
        default:
            return state;
    }
}

export default CartReducer;
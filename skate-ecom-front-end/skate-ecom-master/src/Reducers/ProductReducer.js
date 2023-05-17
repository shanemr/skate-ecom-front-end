
const ProductReducer = (state={},action) =>{
    let newState;
    console.log("PRODUCT REDUCER CALLED");
    switch (action.type) {
        case 'GET_PRODUCTS':
            newState = {
                    ...state,
                    products: action.products
            }
            return newState;
        case 'GET_BRAND_NAMES':
            newState ={
                ...state,
                brands: action.brands
            }
            return newState;
        default:
           return state;
    }
}

export default ProductReducer;
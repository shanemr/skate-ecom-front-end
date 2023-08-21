const  AuthReducer = (state={}, action) =>{
    switch (action) {
        case 'AUTH':
                let newToken = {...state, token: action.data}
                return newToken;
        default:
            return state;
    }
}

export default AuthReducer;
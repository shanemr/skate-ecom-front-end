const  AuthReducer = (state={isLoggedIn: false}, action) =>{

    switch (action.type) {
        case 'SUCCESS':
                let validLogin = {...state, token: action.data, isLoggedIn: true}
                return validLogin;
        case 'ERROR':
               let invalidLogin = {...state, isLoggedIn: false}
               return invalidLogin;
        default:
            return state;
    }
}

export default AuthReducer;
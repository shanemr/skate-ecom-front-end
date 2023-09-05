const  AuthReducer = (state={user:{}}, action) =>{

    let user = {
        email: '',
        isLoggedIn: false,
        token: ''
    }
    switch (action.type) {
        case 'SUCCESS':
                user = {...state, user:  action.user}
                return user;
        case 'ERROR':
               user = {...state, user: {}}
               return user;
        case 'LOGOUT':
            user = {...state, user: {}}
            return user;
        default:
            return state;
    }
}

export default AuthReducer;
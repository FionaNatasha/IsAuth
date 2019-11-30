
let inisialState = {
    nameLogin: '',
    password: '',
    isAuth: ""
}




export const enterName = (name) => {
    return {
        type: 'inputName',
        name
    }
}


export let enterPassword = (pasword) => {
    return {
        type: 'inputpassword',
        pasword
    }
}

export let isAuth = (isAuth) =>{
    return{
        type:'isAuth',
        isAuth
    }
}

let Login = (state = inisialState, action) => {

    switch (action.type) {
        case 'inputName': return {
            ...state,
            nameLogin: action.name

        }
        case 'inputpassword': return {
            ...state,
            password: action.pasword
        }
        case 'isAuth': return {
            ...state,
            isAuth: action.isAuth
        }


        default: return { ...state }

    }
}

export default Login
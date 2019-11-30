import React from 'react';
import { Redirect } from 'react-router-dom'
import css from './module/Login.module.css'



function Login(props) {


    let enterName = (e) => {
        props.enterName(e.currentTarget.value)
    }

    let enterPassword = (e) => {
        props.enterPassword(e.currentTarget.value)
    }

    let login = (e) => {
        e.preventDefault()

        //write in localStorage right username and password
        if(localStorage.getItem('username')===null&&localStorage.getItem('password')){
            localStorage.setItem('username', 'Admin')
            localStorage.setItem('password', '123123')
        }
        //check input data with localStorage
        if (props.login.nameLogin === localStorage.getItem('username') &&
            props.login.password === localStorage.getItem('password')) {
            localStorage.setItem('isAuth', 'true')
            props.isAuth(localStorage.getItem('isAuth'))
        }else{
            props.isAuth(false);   
        }
    }

    if (props.login.isAuth) { return <Redirect to='/profile' /> }
  
    return (

        <div className={css.FormDiv}>
            <div className={css.Form}>
                <form onSubmit={login} className={props.login.isAuth===null?css.Form:css.FormError}>
                   {props.login.isAuth===false?<div className={css.Error}>*Input data wrong</div>:null}
                    <div><input type="mail" value={props.login.nameLogin}
                        onChange={enterName} placeholder='User Name'
                    /></div>
                    <div><input type="password" value={props.login.password}
                        onChange={enterPassword} placeholder='Password'
                    /></div>
                    <div className={css.Button}><button>Sent</button></div>
                </form>
            </div>
        </div>
    );
}

export default Login
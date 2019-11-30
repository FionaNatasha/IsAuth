import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import './App.css';
import Main from './component/Main'
import Posts from './component/Posts'
import Profile from './component/Profile'
import { connect } from 'react-redux'
import { thunkActionCreator } from './redux/posts'
import Login from './component/Login'
import { enterName, enterPassword, isAuth } from './redux/login';




let FullApp = (props) => {

  let { state, thunkActionCreator } = props

  return (
    <div>
      <div className='Header'>

        <span className='footer'><NavLink to='/main'>Main</NavLink></span>
        <span className='footer'><NavLink to='/post'>Posts</NavLink></span>
        <span className='footer'><NavLink to='/profile'>Profile</NavLink></span>

      </div>
      <Switch>
        <Route axact path="/main" render={() => <Main />} />
        <Route  path="/post" render={() => <Posts state={state} thunkActionCreator={thunkActionCreator} />} />
        <Route path="/profile" render={() => <Profile state={state} />} />
      </Switch>


    </div>
  )
}
class App extends React.Component {

  componentDidMount() {
    this.props.isAuth(localStorage.getItem('isAuth'))
  }

  render() {
    let { state, enterName, enterPassword, isAuth } = this.props
    return (
      <div className="App">
        <Router>
          <Route path='/' render={() => <FullApp {...this.props} />} />

          <Route exact path='/login' render={() => <Login login={state.Login}
            enterName={enterName}
            enterPassword={enterPassword}
            isAuth={isAuth} />} />

        </Router>
      </div>
    )
  }

}







let mstp = (state) => {
  return {
    state: state
  }
}

let mdtp = (dispatch) => {

  return {
    thunkActionCreator: (count) => dispatch(thunkActionCreator(count)),
    enterName: (name) => dispatch(enterName(name)),
    enterPassword: (password) => dispatch(enterPassword(password)),
    isAuth: (bool) => dispatch(isAuth(bool))
  }
}


export default connect(mstp, mdtp)(App);

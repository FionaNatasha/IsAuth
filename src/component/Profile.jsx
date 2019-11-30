import React from 'react';
import { Redirect } from "react-router-dom";


function Profile(props) {

  if (!props.state.Login.isAuth) {
    return <Redirect to='/login' />
  }

  return (
    <div style={{color:'white'}}>
      <h2>Profile</h2>
    </div>
  );
}
export default Profile
//0. create project
// 1. make layout
// 2. divade into components
// 3. static react version
// 4. declare state (what, were) and props
// 5. write logic

import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// state
// isloggedIn bool
// isProcess bool

class Auth extends React.Component {
  render() {
    return (
      <>
        <Login></Login>
        <Logout></Logout>
        <Spinner></Spinner>
      </>
    );
  }
}

export default Auth;

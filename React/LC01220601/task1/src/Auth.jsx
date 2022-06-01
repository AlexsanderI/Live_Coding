import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

// state
// isloggedIn bool
// isProcess bool
//
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

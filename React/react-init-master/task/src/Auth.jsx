import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

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

export default Auth;

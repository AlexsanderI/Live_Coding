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

// logo
// 1.show Login by default
// 2.after login click - show Spinner for 2 seconds
// 3.hide Spinner, show logout
// 4.after logout click -show login
class Auth extends React.Component {
  state = {
    isLoginIn: false,
    isProcessing: false,
  };

  loginHandler = () => {
    //
    this.setState({
      isProcessing: true,
    });
    setTimeout(() => {
      //
      this.setState({
        isProcessing: false,
        isLoginIn: true,
      });
    }, 2000);
  };

  logoutHendler = () => {
    // input obj
    // output setate
    this.setState({
      isLoginIn: false,
    });
  };

  render() {
    console.log('RERENDER');
    const { isProcessing, isLoginIn } = this.state;
    console.log('Render is called');
    if (isProcessing) {
      return <Spinner></Spinner>;
    }
    if (isLoginIn) {
      // мщжно через тернарный оператор - читаемость слабая
      return <Logout onLogout={this.logoutHendler}></Logout>;
    }
    return <Login onLogin={this.loginHandler}></Login>;
  }
}

export default Auth;

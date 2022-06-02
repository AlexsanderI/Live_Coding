import React from 'react';

//input: obj({onLogin: callback})
//output: jsx

const Login = props => {
  console.log(props);
  return (
    <button className="login btn" onClick={props.onLogin}>
      Login
    </button>
  );
};
export default Login;

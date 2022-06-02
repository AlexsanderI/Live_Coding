import React from 'react';

//input: obj({onLogin: callback})
//output: jsx

const logout = props => {
  console.log('LofOut Props', props);
  return (
    <button className="logout btn" onClick={props.onLogout}>
      Logout
    </button>
  );
};
export default logout;

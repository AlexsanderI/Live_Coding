import React from 'react';
import User from './User';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

function Users(props) {
  console.log(props);
  return (
    <>
      <div className="page__content">
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/users/github">Github</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/facebook">Facebook</Link>
          </li>
        </ul>
        <Switch>
          {/* <Route exact path="/" component={Home}></Route> */}
          <Route path="/users/:userId" component={User}></Route>
        </Switch>
      </div>
    </>
  );
}
export default Users;

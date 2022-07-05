import React from 'react';
import Users from './Users';
import Home from './Home';
import { BrowserRouter, Switch, Link, Route } from 'react-router-dom';

const App = () => {
  console.log(location);
  return (
    <>
      <BrowserRouter>
        <div className="page">
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users">Users</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/users" component={Users}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;

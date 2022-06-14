// 0. create project
// 1. make layout
// 2. divade into components
// 3. static react version
// 4. declare state (what, were) and props
// 5. write logic

import React from 'react';
import Pagination from './Pagination';
import User from './User';

// state
// currentPage

class UserList extends React.Component {
  state = {
    currentPage: 1,
  };
  itemsPerPage = 3;
  prevBtnHandler = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  nextBtnHandler = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  render() {
    const users = this.props.users;
    const startIndex = (this.state.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    const usersToRender = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          currentPage={this.state.currentPage}
          goPrev={this.prevBtnHandler}
          goNext={this.nextBtnHandler}
          totalItems={users.length}
          itemsPerPage={this.itemsPerPage}
        />
        <ul className="users">
          {usersToRender.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UserList;

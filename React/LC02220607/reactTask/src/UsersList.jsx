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
// curPage

class UserList extends React.Component {
  state = {
    curPage: 1,
  };
  itemsPrePage = 3;
  prevBtnHandler = () => {
    this.setState({ curPage: this.state.curPage - 1 });
  };

  nextBtnHandler = () => {
    this.setState({ curPage: this.state.curPage + 1 });
  };

  render() {
    const users = this.props.users;
    const startIndex = (this.state.curPage - 1) * this.itemsPrePage;
    const endIndex = startIndex + this.itemsPrePage;
    const usersToRender = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          curPage={this.state.curPage}
          goPrev={this.prevBtnHandler}
          goNext={this.nextBtnHandler}
          totalItems={users.length}
          itemsPrePage={this.itemsPrePage}
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

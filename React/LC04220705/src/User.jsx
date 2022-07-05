import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// console.log('USER props:', props);

function User(props) {
  // input: any
  // output: arr [any, func]

  const [userInfo, setUserInfo] = useState({
    avatarUrl: null,
    location: null,
    name: null,
  });

  // const { userId } = useParams();
  // input: func, array
  // output: undefined

  const userId = props.match.params.userId;
  useEffect(() => {
    fetch(`https://api.github.com/users/${userId}`)
      .then(response => response.json())
      .then(res => {
        console.log(res);

        setUserInfo({ avatarUrl: res.avatar_url, location: res.location, name: res.name });
      });
  }, [userId]);

  const { avatarUrl, location, name } = userInfo;
  if (avatarUrl === null) {
    return null;
  }
  return (
    <div className="user">
      <img alt="User Avatar" src={avatarUrl} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
}
export default User;

import React from 'react'
import Image from '../Image';

function UserProfile(props) {
  const { user } = props;
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <Image source={user.avatar} alternativeText='User avatar' />
    </div>
  )
}

export default UserProfile
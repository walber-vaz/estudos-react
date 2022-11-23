import React from 'react'
import Image from '../Image';
import PropTypes from 'prop-types'

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

UserProfile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
} 

export default UserProfile
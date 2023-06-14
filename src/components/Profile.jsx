import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {

    const user = useSelector((state) => state.user.value);

  return (
    <div>
          <h1>Profile Page</h1>
          <p>Username:{user.name}</p>
          <p>User Email: {user.email}</p>
          <p>Age:{user.age}</p>
    </div>
  )
}

export default Profile
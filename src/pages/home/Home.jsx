import React from 'react'
import UserList from './UserList';
import Friends from './Friends';
import FriendRequest from './FriendRequest';
import BlockList from './BlockList';


function Home() {
  return (
    <div className='home_wrapper'>
      <UserList/>
      <Friends/>
      <FriendRequest/>
      <BlockList/>
    </div>
  )
}

export default Home
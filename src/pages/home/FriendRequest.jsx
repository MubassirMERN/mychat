import React from 'react'
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utilities/image'

function FriendRequest() {
  return (
    <>
        <GroupCard cardtitle="Friend">
        <div className='usermainbox'>
          <div className='useritem'>
            <div className='userimg_box'>
              <Image source="" alt="img"/>
            </div>
            <div className='userinfobox'>
              <div>
                <h3>Mubassir</h3>
                <p>MERN developer</p>
              </div>
              <button className='addbutton'>
                Accept
              </button>
            </div>
          </div>
        </div>
      </GroupCard>  
    </>
  )
}

export default FriendRequest
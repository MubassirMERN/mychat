import React from 'react'
import GroupCard from '../../components/home/GroupCard'



function Friends() {
  return (
    <>
        <GroupCard cardtitle="Friend">
        <div className='usermainbox'>
        {[0,1,2,3,4,5,6].map((item,index)=>(
          <div key={index} className='useritem'>
            <div className='userimg_box'>
              <image source="" alt="img"/>
            </div>
            <div className='userinfobox'>
              <div>
                <h3>Mubassir</h3>
                <p>MERN developer</p>
              </div>
              <button className='addbutton'>
                Block
              </button>
            </div>
          </div>
        ))

        }

        </div>
      </GroupCard>
    </>
  )
}

export default Friends
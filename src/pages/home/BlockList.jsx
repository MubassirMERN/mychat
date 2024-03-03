import React from 'react'
import GroupCard from '../../components/home/GroupCard'
import Image from '../../utilities/image'

function BlockList() {
  return (
    <>
        <GroupCard cardtitle="Block List">
        <div className='usermainbox'>
        {[0,1,2,3,4,5,6].map((item,index)=>(
          <div key={index} className='useritem'>
            <div className='userimg_box'>
              <Image source="" alt="img"/>
            </div>
            <div className='userinfobox'>
              <div>
                <h3>Mubassir</h3>
                <p>MERN developer</p>
              </div>
              <button className='addbutton'>
                Unblock
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

export default BlockList
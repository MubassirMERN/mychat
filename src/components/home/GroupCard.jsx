import React from 'react'
import { BsThreeDotsVertical } from "react-icons/bs";


function GroupCard({children,cardtitle}) {
  return (
    <div className='groupcard'>
        <div className='group_heading'>
            <h4>{cardtitle}</h4>
            <div className='dots'>
                <BsThreeDotsVertical />
            </div>
        </div>
        {children}
    </div>
  )
}

export default GroupCard
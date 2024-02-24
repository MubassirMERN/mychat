import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoHomeOutline } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";



function Sidebar() {
  return (
    <>
        <div className='sidebarBox'>
            <div>
                <div className='img_box'>

                </div>
            </div>
            <div>
                <ul className='navigation'>
                    <li>
                        <NavLink to="/home">
                            <IoHomeOutline />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/message">
                            <AiOutlineMessage />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/notification">
                            <IoMdNotificationsOutline />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/setting">
                            <IoSettingsOutline />
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div>
                <button className='logout'>Logout</button>
            </div>
        </div>
    </>
  )
}

export default Sidebar
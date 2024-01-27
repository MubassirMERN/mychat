import React from 'react'
import { Link } from 'react-router-dom'

function AuthNavigate({text,linktext,link,style}) {
  return (
    <p className={style}>
        {text}
        <Link to={link} >{linktext}</Link>
    </p>
  )
}

export default AuthNavigate
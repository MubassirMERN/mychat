import React from 'react'

function Image({source,alt,style}) {
  return (
    <img className={style} src={source} alt={alt} />
  )
}

export default Image
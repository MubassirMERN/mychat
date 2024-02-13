import { TextField } from '@mui/material'
import React from 'react'

function Input({variant ,labeltext ,style ,type ,name ,onChange}) {
  return (
    <TextField onChange={onChange} type={type} name={name} className={style} label={labeltext} variant={variant} />
  )
}

export default Input
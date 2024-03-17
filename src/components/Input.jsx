import { TextField } from '@mui/material'
import React from 'react'

function Input({variant ,labeltext ,style ,type ,name ,onChange,value}) {
  return (
    <TextField onChange={onChange} type={type} value={value} name={name} className={style} label={labeltext} variant={variant} />
  )
}

export default Input
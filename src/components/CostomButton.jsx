import { Button } from '@mui/material'
import React from 'react'

function CostomButton({variant,text,style}) {
  return (
    <Button className={style} variant={variant}>{text}</Button>
  )
}

export default CostomButton
import { Box, Grid } from '@mui/material'
import React from 'react'
import SectionHeading from '../../components/SectionHeading'
import Input from '../../components/INPUT.JSX'
import CostomButton from '../../components/CostomButton'
import AuthNavigate from '../../components/AuthNavigate'

function Registraton() {
  return (
    <>
      <Box>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <div className='loginbox'>
                <div className='loginbox_inner'>
                  <SectionHeading style="auth_heading" text="Get started with easily register"/>
                  <div className='form_main'>
                    <Input name="email" type="email" variant="outlined" labeltext="Email Addres" style="login_input_field"/>
                    <Input name="fullname" type="text" variant="outlined" labeltext="Full Name" style="login_input_field"/>
                    <Input name="password" type="password" variant="outlined" labeltext="Password" style="login_input_field"/>
                    <CostomButton style="loginbtn" variant='contained' text="Sing Up" />
                  </div>
                  <AuthNavigate style="loginauth" link="/" linktext="sing in" text="Already  have an account ?"/>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='login_img'>
                {/* <Image source={LoginImg} alt="img"/> */}
              </div>
            </Grid>
          </Grid>
        </Box>
    </>
  )
}

export default Registraton
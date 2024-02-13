import { Alert, Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import "./registration.css"
import SectionHeading from '../../components/SectionHeading'
import Input from '../../components/INPUT.JSX'
import CostomButton from '../../components/CostomButton'
import AuthNavigate from '../../components/AuthNavigate'

function Registration() {
  let [error,setError] = useState({
    email: "",
    fullname: "",
    password: ""
  })
  let [signupData , setSignupData] = useState({
    email: "",
    fullname: "",
    password: ""
  })

  let handleForm = (e) =>{
    let {name, value} = e.target
    setSignupData({
      ...signupData,[name]:value
    })
  }

  let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  let handleSubmit = () =>{
    if(!signupData.email){
      setError({email: "email nai"});
    }
    else if(!signupData.email.match(emailregex)){
      setError({email: "email formet thik nai"});
    }
    else if(!signupData.fullname){
      setError({email: ""});
      setError({fullname: "fullname nai"});
    }else if(!signupData.password){
      setError({fullname: ""});
      setError({password: "pass nai"});
    }else{
      setError({
        email: "",
        fullname: "",
        password: ""
      })
      console.log(signupData);
    }
  }

  return (
    <>
      <Box>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <div className='registrationbox'>
                <div className='registrationbox_inner'>
                  <SectionHeading style="auth_heading" text="Get started with easily register"/>
                  <div className='form_main'>
                    <div>
                      <Input onChange={handleForm} name="email" type="email" variant="outlined" labeltext="Email Addres" style="login_input_field"/>
                      {error.email && 
                        <Alert severity="error">{error.email}</Alert>
                      }
                    </div>
                    <div>
                      <Input onChange={handleForm} name="fullname" type="text" variant="outlined" labeltext="Full Name" style="login_input_field"/>
                      {error.fullname &&
                        <Alert severity="error">{error.fullname}</Alert>
                      }
                    </div>
                    <div>
                      <Input onChange={handleForm} name="password" type="password" variant="outlined" labeltext="Password" style="login_input_field"/>
                      {error.password &&
                        <Alert severity="error">{error.password}</Alert>
                      }
                    </div>
                    <CostomButton onClick={handleSubmit} style="registrationbtn" variant='contained' text="Sing Up" />
                  </div>
                  <AuthNavigate style="registrationauth" link="/" linktext="sing in" text="Already  have an account ?"/>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='registration_img'>
                {/* <Image source={LoginImg} alt="img"/> */}
              </div>
            </Grid>
          </Grid>
        </Box>
    </>
  )
}

export default Registration
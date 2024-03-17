import { Alert, Box, Grid } from '@mui/material'
import React, { useState } from 'react'
import "./registration.css"
import SectionHeading from '../../components/SectionHeading'
import Input from '../../components/INPUT.JSX'
import CostomButton from '../../components/CostomButton'
import AuthNavigate from '../../components/AuthNavigate'
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, sendEmailVerification  } from "firebase/auth";
import { InfinitySpin } from 'react-loader-spinner';
import { useNavigate } from "react-router-dom";

function Registration() {
  const auth = getAuth();
  const navigate = useNavigate();
  const [loader,setLoader] =useState(false)

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
      setLoader(true)
      setError({
        email: "",
        fullname: "",
        password: ""
      })
      createUserWithEmailAndPassword  (auth, signupData.email, signupData.password).then((userCredential)=>{
        sendEmailVerification(auth.currentUser).then(()=>{
          navigate("/")
        })
      }).catch((error)=>{
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode == "auth/email-already-in-use"){
          setError({email: "email already existd"});
        }else{
          setError({email: ""});
        }
        
      })
      setSignupData({
          email: "",
          fullname: "",
          password: ""
        })
      setTimeout(()=>{
        setLoader(false)
      },2000)
      // console.log(signupData);
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
                      <Input onChange={handleForm} name="email" value={signupData.email} type="email" variant="outlined" labeltext="Email Addres" style="login_input_field"/>
                      {error.email && 
                        <Alert severity="error">{error.email}</Alert>
                      }
                    </div>
                    <div>
                      <Input onChange={handleForm} name="fullname" value={signupData.fullname} type="text" variant="outlined" labeltext="Full Name" style="login_input_field"/>
                      {error.fullname &&
                        <Alert severity="error">{error.fullname}</Alert>
                      }
                    </div>
                    <div >
                      <Input onChange={handleForm} name="password" value={signupData.password} type="password" variant="outlined" labeltext="Password" style="login_input_field"/>
                      {error.password &&
                        <Alert severity="error">{error.password}</Alert>
                      }
                    </div>
                      {loader ?
                        <InfinitySpin
                        visible={true}
                        width="200"
                        color="#4fa94d"
                        ariaLabel="infinity-spin-loading"
                      />
                      :
                      <CostomButton onClick={handleSubmit} style="registrationbtn" variant='contained' text="Sing Up" />
                      }
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
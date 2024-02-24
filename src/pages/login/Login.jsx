import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
import "./login.css" 
import SectionHeading from '../../components/SectionHeading';
import GoogleSvg from '../../../public/google.svg';
import Input from '../../components/INPUT.JSX';
import CostomButton from '../../components/CostomButton';
import AuthNavigate from '../../components/AuthNavigate';
import LoginImg from '../../assets/images/guku.webp'
import Image from '../../utilities/image';
import { IoEyeSharp } from "react-icons/io5";
import { FaEyeSlash } from "react-icons/fa";
import { Alert, Modal } from '@mui/material';
import { IoMdClose } from "react-icons/io";
// import { Alert, Modal } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



function Login() {

    // const navigate = useNavigate();
  //   const auth = getAuth();
  // const dispatch = useDispatch()


  let emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let [passShow,setpassShow] = useState(false)


  let handlePassShow = () => {
    if(passShow){
      setpassShow(false)
    }else{
      setpassShow(true)
    }
  }

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  let handleModalClose =() => {
    setOpen(false)
  }
  
  let [formData, setFormData] = useState({
    email: "",
    password: ""
  })

  let [error, setError] = useState({
    email: "",
    password: ""
  })

  let handleLoginForm =(e) => {
    let {name,value} = e.target
    setFormData({
      ...formData,[name]:value
    })
  }

  let handleForgot = (e) =>{
    setFormData(e.target.value)
  }
  let handleForgotSubmit = () =>{
    if(!formData.email){
      setError({email:"email nai"})
    }
    else if(!formData.email.match(emailregex)){
     setError({email: "email formet thik nai"})
    }
    else if(!formData.password){
      setError({email:""});
      setError({password:"password nai"})
    }else{
      signInWithEmailAndPassword(auth, formData.email, formData.password).then((userCredential)=>{
        if(userCredential.user.emailVerified){
          localStorage.setItem("user",JSON.stringify(userCredential.user))
            dispatch(loginuser(userCredential.user))
            Navigate("/home")
        }else{ singOut(auth).than(()=>{
          TransformStream.error('please Verify Your Email',{
            position:"top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        })
        }
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode == "auth/invalid-credential"){
          setError({email: "email or password error"});
        }else{
          setError({email: ""});
        }
        console.log(errorCode);
        console.log(errorMessage);
      })
      setError({
        email: "",
        password: ""
      })
    }
  }
  
  let [forgetformData, setforgetFormData] = useState({
    forgetemail: "",
  })
  let [forgeterror, setforgetError] = useState({
    forgetemail: "",
  })

  let handleForgotData = (e) => {
    let {name, value} = e.target
    setforgetFormData({
      ...forgetformData,[name]:value
    })
  }

  let handleLoginSubmit = () => {
    console.log(forgetformData);
    if(!forgetformData.forgetemail){
      setforgetError({forgetemail: "forget email ny"});
    }
    else if(!forgetformData.forgetemail.match(emailregex)){
      setforgetError({forgetemail: "email format thik ny"});
    }else{
      setforgetError({forgetemail: ""})
      console.log(forgetformData);
    }
  }



  return (
    <>
    {/* <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/> */}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <i className='modal_close' onClick={handleModalClose}><IoMdClose /></i>
            <div className='forgot_box'>
              <h2>forgot password</h2>
              <div>
                <Input onChange={handleForgotData} name="forgetemail" type="email" labeltext="Email Address"/>
                {forgeterror.forgetemail &&
                    <Alert severity="error"> {forgeterror.forgetemail} </Alert>
                }
              </div>
              <CostomButton onClick={handleForgotSubmit} text="Send Link" variant="contained"/>
            </div>
          </Box>
      </Modal>
        <Box>
          <Grid container spacing={0}>
            <Grid item xs={6}>
              <div className='loginbox'>
                <div className='loginbox_inner'>
                  <SectionHeading style="auth_heading" text="Login to your account!"/>
                  <div className='provider_login'>
                    <img src={GoogleSvg} alt="" />
                    <span>Login with Google</span>
                  </div>
                  <div className='form_main'>
                    <div>
                      <Input onChange={handleLoginForm} name="email" type="email" variant="standard" labeltext="Email Addres" style="login_input_field"/>
                      {error.email && 
                        <Alert severity="error">{error.email}</Alert>
                      }
                    </div>
                    <div className='input_pass'>
                      <Input onChange={handleLoginForm} name="password" type={passShow ? "text" : "password"} variant="standard" labeltext="Password" style="login_input_field"/>
                      <i onClick={handlePassShow}>{passShow ? (<IoEyeSharp/>) : (<FaEyeSlash />) }</i>
                      {error.password &&
                        <Alert severity="error">{error.password}</Alert>
                      }
                    </div>
                    <CostomButton onClick={handleLoginSubmit} style="loginbtn" variant='contained' text="Login to Continue" />
                  </div>
                  <AuthNavigate style="loginauth" link="/registration" linktext="sing up" text="Don’t have an account ?"/>
                  {/* <AuthNavigate style="loginauth" linktext="forgot password ?" /> */}
                  {/* <button onClick={handleOpen}>forgot</button> */}
                  <p className='loginauth'>
                    <span onClick={handleOpen}>forgot password ?</span>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className='login_img'>
                <Image source={LoginImg} alt="img"/>
              </div>
            </Grid>
          </Grid>
        </Box>
    </>
  )
}

export default Login
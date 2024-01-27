import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
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
import { Modal } from '@mui/material';
import { IoMdClose } from "react-icons/io";



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

const ValidationTextField = styled(TextField)({
  '& input:valid + fieldset': {
    borderColor: '#E0E3E7',
    borderWidth: 1,
  },
  '& input:invalid + fieldset': {
    borderColor: 'red',
    borderWidth: 1,
  },
  '& input:valid:focus + fieldset': {
    borderLeftWidth: 4,
    padding: '4px !important', // override inline-style
  },
});


function Login() {
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
  return (
    <>
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
              <Input type="email" labeltext="Email Address" />
              <CostomButton text="Send Link" variant="contained"/>
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
                      <Input name="email" type="email" variant="standard" labeltext="Email Addres" style="login_input_field"/>
                    </div>
                    <div className='input_pass'>
                      <Input name="password" type={passShow ? "text" : "password"} variant="standard" labeltext="Password" style="login_input_field"/>
                      <i onClick={handlePassShow}>{passShow ? (<IoEyeSharp/>) : (<FaEyeSlash />) }</i>
                    </div>
                    <CostomButton style="loginbtn" variant='contained' text="Login to Continue" />
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
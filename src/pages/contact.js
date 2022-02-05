import React from 'react';
import "./contact.css";
import { useState } from 'react';
import ArrowDropDownCircleRoundedIcon from '@mui/icons-material/ArrowDropDownCircleRounded';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import "./input"
import Input from './input';


export default function Conact() {
  
  const [form, setForm] = useState({
    email: "",
    name: "",
    message:""
  });

  
  return (
  <div className='container'>
      <div className='contact'>
      <div className='height'>
         <h1  className='txt'> <ArrowDropDownCircleRoundedIcon style={{ fontSize:'28px', }}/> Contact Me<span className='txt2' >!</span></h1>  
      </div>
      <div className='info'>
        <div className='icon-placing'>
        <CallIcon className='icons' />
        <h1> 7355615625 </h1>
        </div>
        <div className='icon-placing' >
        <EmailIcon className='icons' />
        <h1> ryansaurabh11<span style={{fontSize:'20px'}}>@</span>gmail.com</h1>
        </div>
        <div className='icon-placing'>
        <LocationCityIcon className='icons' />
        <h1> Kukkatpalli, Hyderabad</h1>
        </div>
      </div>
      

      </div>
      <div className='form'>
        <div>
   <Input
    value={form.name}
    placeholder={"Your Name"}
    type={"text"}
    onChange={(e) => {
      setForm({ ...form, name: e.target.value });
    }}/>

      </div>
      <div>
      <Input
    value={form.email}
    placeholder={"Your Email"}
    type={"email"}
    onChange={(e) => {
      setForm({ ...form, email: e.target.value });
    }}/>


      </div>
      <div>
      <Input style={{height:'130px',width:'350px'}}
    value={form.message}
    placeholder={"Your Message"}
    type={"text"}
    onChange={(e) => {
      setForm({ ...form, message : e.target.value });
    }}/>

      </div>
      <touchableOpacity className='button' > <p>SUBMIT</p> </touchableOpacity>
      </div>


  </div>
  );
}

import React, { useState } from 'react'
import {   TextField,Button } from '@mui/material';

const Signin = () => {
    const [formData,setFormData]=useState({
        email:'',
        password:''
    })
    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({...formData,[name]:value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("login form",formData)
    }
  return (
    <div>
        <h1 className='text-lg font-bold text-center pb-8 '>Login</h1>
        <form onSubmit={handleSubmit}>
            <TextField 
            fullWidth
            label="Email"
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='enter your email...'
            />
            <TextField 
            fullWidth
            label="Password"
            name='password'
            type='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='enter your password...'
            />
              <div item xs={12}>
                <Button fullWidth style={{color:"white"}}
                type='submit'
                className='customButton'
                sx={{padding:".9rem"}}> 
                    Login
                </Button>
                </div>
        </form>
    </div>
  )
}

export default Signin
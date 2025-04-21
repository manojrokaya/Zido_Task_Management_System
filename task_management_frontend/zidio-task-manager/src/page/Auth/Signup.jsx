import React, { useState } from 'react'
import {   TextField,Button, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Signup = ({togglePanel}) => {
    const [formData,setFormData]=useState({
        fullName:'',
        email:'',
        password:'',
        role:''
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
        <h1 className='text-lg font-bold text-center pb-8'>Register</h1>
        <form className='space-y-3' onSubmit={handleSubmit}>
        <TextField 
            style={{marginTop:'1rem'}}
            fullWidth
            label="Full Name"
            name='fullName'
            value={formData.fullName}
            onChange={handleChange}
            placeholder='enter your name'
            />
            <TextField 
            style={{marginTop:'1rem'}}
            fullWidth
            label="Email"
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            placeholder='enter your email...'
            />
            <TextField 
            style={{marginTop:'1rem'}}
            fullWidth
            label="Password"
            name='password'
            type='password'
            value={formData.password}
            onChange={handleChange}
            placeholder='enter your password...'
            />
            <FormControl style={{marginTop:'1rem'}} fullWidth>
        <InputLabel id="demo-simple-select-label">Role</InputLabel>
        <Select
        
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={formData.role}
          name='role'
          label="Role"
          onChange={handleChange}
        >
          <MenuItem value={'ROLE_CUSTOMER'}>USER</MenuItem>
          <MenuItem value={'ROLE_ADMIN'}>ADMIN</MenuItem>
        </Select>
      </FormControl>
              <div style={{marginTop:'1rem'}}>
                <Button fullWidth style={{color:"white"}}
                type='submit'
                className='customButton'
                sx={{padding:".9rem"}}> 
                    Register
                </Button>
                </div>
        </form>
        <div  style={{marginTop:'2rem'}} className=' flex items-center gap-2 py-5 justify-center' >
          <span>Already have an account?</span>
          <Button onClick={togglePanel}>Login</Button>
        </div>
    </div>
  )
}

export default Signup
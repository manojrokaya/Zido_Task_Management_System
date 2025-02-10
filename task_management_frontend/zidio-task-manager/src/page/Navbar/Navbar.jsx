import React from 'react'
import './Navbar.css' 
import { Avatar } from '@mui/material'

const Navbar = () => {
  return (
    <div className='container z-10 sticky left-0 right-0 top-0 py-3 px-5 lg:px-10, flex justify-between items-center'>
        <p className="font-bold text-lg">Zidio Task Manager</p>
        <div className='flex items-center gap-5'>
            <p>Zidio Task Manager</p>
            <Avatar src='https://yt3.ggpht.com/yAiVmyZ3kQwGph336xoBnncz6vyssKVYenpBJk85mMgXEcAYL98G9ZFtqqATAMY7g_bmGFcWrQ=s88-c-k-c0x00ffffff-no-rj' >NK</Avatar>
            
        </div>
    </div>
  )
}

export default Navbar
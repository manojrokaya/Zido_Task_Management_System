import { IconButton,Menu,MenuItem } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import UserList from '../UserList';
import SubmissionList from './SubmissionList';
import EditTaskForm from './EditTaskForm';


const role='ROLE_ADMIN'

const TaskCard = () => {

  
        const [anchorEl, setAnchorEl] = React.useState(null) ;
        const openMenu = Boolean(anchorEl);
        const handleMenuClick = (event) => {
          setAnchorEl(event.currentTarget);
        };
        const handleMenuClose = () => {
          setAnchorEl(null);
        };

        const [openUserList,setOpenUserList]=useState(false);
        const handleCloseUserList=()=>{
            setOpenUserList(false);
        };
        const handleOpenUserList=()=>{
            setOpenUserList(true)
            handleMenuClose()
        };
        const [openSubmissionList,setOpenSubmissionList]=useState(false);
        const handleCloseSubmissionList=()=>{
            setOpenSubmissionList(false);
        };
        const handleOpenSubmissionList=()=>{
            setOpenSubmissionList(true)
            handleMenuClose()
        };
        const [openUpdateTaskForm,setOpenUpdateTaskForm]=useState(false);
        const handleCloseUpdateTaskForm=()=>{
            setOpenUpdateTaskForm(false);
        };
        const handleOpenUpdateTaskModel=()=>{
            setOpenUpdateTaskForm(true)
            handleMenuClose()
        };
        const handleDeleteTask=()=>{
            handleMenuClose()
        };

  return (
    <div>
    <div className='card lg:flex justify-between'>
        <div  className='lg:flex gap-5 items-center space-y-2 w-[90%] lg:w-[70%]' >
            <div className=' lg:w-[7rem] lg:h-[7rem] object-cover'>
                <img src="https://yt3.ggpht.com/yAiVmyZ3kQwGph336xoBnncz6vyssKVYenpBJk85mMgXEcAYL98G9ZFtqqATAMY7g_bmGFcWrQ=s88-c-k-c0x00ffffff-no-rj" alt="" />
            </div>
            <div className='space-y-5'>
                <div className='space-y-2'>
                    <h1 className='font-bold text-lg'>Task Manager App</h1>
                    <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, temporibus.</p>

                </div>
                <div className='flex flex-wrap gap-2 items-center'>

                    {[1,1,1,1].map((item)=><span className='py-1 px-5 rounded-full techStack' >
                        Angular
                    </span>)}
                </div>
                
            </div>
        </div>

        <div>
            <IconButton  
        id="basic-button"
        aria-controls={openMenu ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={openMenu ? 'true' : undefined}
        onClick={handleMenuClick}>
        
                <MoreVertIcon/>
            </IconButton>
            <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleMenuClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        

        {
            role==='ROLE_ADMIN'?(
            <>
            <MenuItem onClick={handleOpenUserList}>Assigned User</MenuItem>
            <MenuItem onClick={handleOpenSubmissionList}>See Submissions</MenuItem>
            <MenuItem onClick={handleOpenUpdateTaskModel}>Edit</MenuItem>
            <MenuItem onClick={handleDeleteTask}>Delete</MenuItem>
            </>
        ):(
         <>
            </>
        )}

      </Menu>

        </div>
        </div>
        <UserList open={openUserList} handleClose={handleCloseUserList}/>
        <SubmissionList open={openSubmissionList} handleClose={handleCloseSubmissionList}/>
        <EditTaskForm open={openUpdateTaskForm} handleClose={handleCloseUpdateTaskForm}/>
    </div>
  );
};

export default TaskCard
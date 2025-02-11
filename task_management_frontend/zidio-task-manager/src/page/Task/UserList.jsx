import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Avatar, Divider, ListItem, ListItemAvatar, ListItemText } from '@mui/material';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  outline:'none',
  boxShadow: 24,
  p: 2,
};

export default function UserList({handleClose,open}) {


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {
            [1,1,1].map((item)=>
            <>
            <div className='flex items-center justify-between w-full'>
                <div>
            <ListItem>
                <ListItemAvatar>
                    <Avatar src='https://yt3.ggpht.com/yAiVmyZ3kQwGph336xoBnncz6vyssKVYenpBJk85mMgXEcAYL98G9ZFtqqATAMY7g_bmGFcWrQ=s88-c-k-c0x00ffffff-no-rj'/>
                </ListItemAvatar>
                <ListItemText secondary={"@Navaneetha Krishnan"} primary={"Zidio Task Managment"}/>
            </ListItem>
            </div>
            <div>
             <Button style={{ color:'white'}} className='customButton'>select</Button>
            </div>
            </div>
            <Divider variant='inset'/>
            </>
            )
          }
         
        </Box>
      </Modal>
    </div>
  );
}

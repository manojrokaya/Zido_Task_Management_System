import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState,useEffect } from 'react';
import { Autocomplete, Grid, Grid2, TextField } from '@mui/material';
import {DateTimePicker,LocalizationProvider} from "@mui/x-date-pickers"
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs"

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

export default function EditTaskForm({handleClose,open}) {
      
    const tags=["Angular","React","Spring Boot", "MySQL"]
    const [formData,setFormData]=useState({
        title:'',
        image:'',
        description:'',
        tags:[],
        deadline: new Date(),
    });

    const [selectedTags,setSelectedTags]=useState([]);

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const handleTagsChange=(event,value)=>{
        setSelectedTags(value);
    }


    const handleDeadlineChange=(date)=>{
        setFormData({
            ...formData,
            deadline:date
        })
    }

    const formateDate=(input)=>{
        let{
            $y:year,
            $M:month,
            $D:day,
            $H:hours,
            $m:minutes,
            $s:seconds,
            $ms:milliseconds,

        }=input;
        const date = new Date(year,month,day,hours,minutes,seconds,milliseconds);
        const fomratedDate = date.toISOString();
        return fomratedDate;
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        const {deadline}=formData;
        formData.deadline=formateDate(deadline);
        formData.tags=selectedTags;
        console.log("formData",formData,"deadline : ",formData.deadline)
        handleClose()
    }

    useEffect(()=>{


    },[])

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         
         <form onSubmit={handleSubmit}>
            <Grid2 container spacing={2} alignItems="center">
                <Grid2 item xs={2}>
                    <TextField 
                    label='Title'
                    fullWidth
                    name='title'
                    value={formData.title}
                    onChange={handleChange}
                    />
                </Grid2>
                <Grid2 item xs={2}>
                    <TextField 
                    label='Image'
                    fullWidth
                    name='image'
                    value={formData.image}
                    onChange={handleChange}
                    />
                </Grid2>
                <Grid2 item xs={2}>
                    <TextField 
                    label='Description'
                    fullWidth
                    multiline
                    rows={4}
                    name='description'
                    value={formData.description}
                    onChange={handleChange}
                    />
                </Grid2>
                <Grid2 item xs={2}>
                    <Autocomplete
                    multiple
                    id='multiple-limit-tags'
                    options={tags}
                    onChange={handleTagsChange}
                    getOptionLabel={(options)=>options}
                    renderInput={(params)=><TextField 
                        label='Tags'
                        fullWidth
                        {...params}
                        />}
                    />    
                </Grid2>
                <Grid2 item xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DateTimePicker 
                    onChange={handleDeadlineChange}
                    className='w-full' 
                    label="Deadline"
                    renderInput={(params)=><TextField{...params}/>}
                    />
                </LocalizationProvider>
                </Grid2>
                <Grid2 item xs={12}>
                <Button fullWidth style={{color:"white"}}
                type='submit'
                className='customButton'
                sx={{padding:".9rem"}}> 
                  Update
                </Button>
                </Grid2>


            </Grid2>
         </form>
          
        </Box>
      </Modal>
    </div>
  );
}

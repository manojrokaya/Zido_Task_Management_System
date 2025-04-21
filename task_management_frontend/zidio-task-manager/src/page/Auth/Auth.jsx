import { useState } from "react";
import React from 'react'
import "./Auth.css"
import Signin from "./Signin";
import Signup from "./Signup";

const Auth = () => {

    const [isRegister,setIsRegister]=useState(true);
    const togglePanel=()=>{
        setIsRegister(!isRegister)
    };

  return (
    <div className='flex justify-center h-screen items-center overflow-hidden'>
        <div className='box lg:max-w-4xl'>
            <div className={`cover ${isRegister?"rotate-active":""}`}>
                <div className="front">
                    <img src="https://images.pexels.com/photos/3243/pen-calendar-to-do-checklist.jpg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <div className="text">
                        <span className="text-1" style={{color:"purple"}}>Success is built upon well-organized tasks</span>
                        <span className="text-2 text-xs " style={{color:"purple"}}>Let's get Connected</span>
                    </div>
                </div>
                <div className="back">
                    <img src="https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />

                </div>
            </div>
            <div className="forms h-full">
                <div className="form-content h-full">
                    <div className="login-form">

                    <Signin togglePanel={togglePanel}/>
                    </div>
                    <div className="signup-form">
                    <Signup togglePanel={togglePanel}/>

                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Auth
import { useState } from "react";
import React from 'react'
import "./Auth.css"
import Signin from "./Signin";

const Auth = () => {

    const [isRegister,setIsRegister]=useState(false);
    const togglePanel=()=>{
        setIsRegister(!isRegister)
    };

  return (
    <div className='flex justify-center h-screen items-center overflow-hidden'>
        <div className='box lg:max-w-4xl'>
            <div className={`cover ${isRegister?"rotate-active":""}`}>
                <div className="front">
                    <img src="https://yt3.ggpht.com/yAiVmyZ3kQwGph336xoBnncz6vyssKVYenpBJk85mMgXEcAYL98G9ZFtqqATAMY7g_bmGFcWrQ=s88-c-k-c0x00ffffff-no-rj" alt="" />
                    <div className="text">
                        <span className="text-1">Success is built upon well-organized tasks</span>
                        <span className="text02 text-xs">Let's get Connected</span>
                    </div>
                </div>
                <div className="back">
                    <img src="https://yt3.ggpht.com/yAiVmyZ3kQwGph336xoBnncz6vyssKVYenpBJk85mMgXEcAYL98G9ZFtqqATAMY7g_bmGFcWrQ=s88-c-k-c0x00ffffff-no-rj" alt="" />

                </div>
            </div>
            <div className="forms h-full">
                <div className="form-content h-full">
                    <div className="login-form">

                    <Signin/>
                    </div>
                    <div className="signup-form">
                    Signup Form
                    </div>

                </div>

            </div>

        </div>

    </div>
  )
}

export default Auth
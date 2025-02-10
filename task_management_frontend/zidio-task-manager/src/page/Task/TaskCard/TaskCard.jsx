import React from 'react'

const TaskCard = () => {
  return (
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

    </div>
  )
}

export default TaskCard
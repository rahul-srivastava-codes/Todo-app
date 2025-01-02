import React from 'react'

function TODO() {
  return (
    <div>
      <div className='w-screen h-screen bg-zinc-300 flex items-center justify-around'>
        <div className=''>
          <div className='text-2xl items-center '>Add Task</div>
          <div className='w-[350px] h-[350px] bg-red-100 flex flex-col px-2 py-2'>
            <div className='px-2 py-2'>
            <div>Task</div>
            <input type="text" placeholder='Enter Task'  className='grid justify-items-stretch'/>
            </div>
            <div className='px-2 py-2'>
            <div>Status</div>
            <input type="text" placeholder='Enter status' className='grid justify-items-stretch' />
            </div>
           <div className='px-2 py-4'>
           <div>Deadline</div>
           <input type="date" placeholder='dd/mm/yy'  className='grid justify-items-stretch'/>
           </div>
           <div className='rounded-full py-[4px] h-[35px] w-[100px] bg-green-400 text-center'>
           <button className='text-sx'>Add Task</button>
           </div>
            </div>
        </div>
        <div className=''>Result</div>
      </div>
    </div>
  )
}

export default TODO

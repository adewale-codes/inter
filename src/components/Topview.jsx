import React from 'react'

const Topview = () => {
  return (
    <div className='bg-white'>
        <div className='flex gap-2 md:flex-row text-black flex-col justify-around items-center md:items-start p-5'>
            <div className='bg-white flex flex-col gap-2 p-5 h-1/2 md:w-1/2 rounded-xl drop-shadow'>
                <div className='font-bold text-xl'>Total users</div>
                <div className='font-bold text-3xl'>502</div>
            </div>
            <div className='bg-white flex flex-col gap-2 p-5 h-1/2 md:w-1/2 rounded-xl drop-shadow'>
                <div className='font-bold text-xl'>Total debit</div>
                <div className='font-bold text-3xl'>$59,782</div>
            </div>
            <div className='bg-white flex flex-col gap-2 p-5 h-1/2 md:w-1/2 rounded-xl drop-shadow'>
                <div className='font-bold text-xl'>Total credit</div>
                <div className='font-bold text-3xl'>$189,568</div>
            </div>
        </div>
    </div>
  )
}

export default Topview
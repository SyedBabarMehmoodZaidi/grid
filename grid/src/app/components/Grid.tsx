import React from 'react';

const grid = () => {
  return (
    <div className='grid grid-cols-5 grid-rows-4 h-screen gap-2 p-2'>
    <div className='bg-pink-950 text-white flex justify-center items-center col-span-5'>Header</div>
    <div className='bg-yellow-500 text-white flex justify-center items-center row-span-2'>Side Bar</div>
    <div className='bg-red-700 text-white flex justify-center items-center col-span-4'>Content 1</div>
    <div className='bg-red-700 text-white flex justify-center items-center col-span-2 '>Content 2</div>
    <div className='bg-red-700 text-white flex justify-center items-center col-span-2'>Content 3</div>
    <div className='bg-green-500 text-white flex justify-center items-center col-span-5'>Footer</div>  
    
    </div>
  )
}

export default grid;

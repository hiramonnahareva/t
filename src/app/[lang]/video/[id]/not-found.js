import React from 'react'

export default function VideoNotfound({params: id}) {

  console.log(id)

  return (
    <div className='h-[100vh] flex justify-center items-center'>
      <h2 className='text-4xl font-semibold'>This video with {id} id was not found!</h2>
    </div> 
  ) 
} 

import React from 'react'

const Introduction = () => {
  return (
    <div className='flex flex-col
        px-8 lg:px-40'>
        <p className='text-[15px] lg:text-[30px] font-medium'>Hi There</p>
        <p className='text-[36px] lg:text-[75px] font-bold'>I'm
            <span className='text-sec-light-blue'> Jonah Marc</span>
        </p>
        <p className='text-[20px] lg:text-[40px] font-medium'>I am a software developer</p>
        <p className='text-[12px] lg:text-[20px]'>Based in the Philippines. I have been a developer for 2 years. I am currently building my portfolio, focusing on full-stack web development, including testing and deployment.</p>
    </div>
  )
}

export default Introduction
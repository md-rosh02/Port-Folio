import React from 'react'

const Contact = () => {
  return (
    <div className='text-5xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold p-8 sm:p-8 md:p-20 leading-normal sm:leading-14 md:leading-33 vs flex flex-col gap-5 md:gap-20 md:pb-0 mt-10'>
      <h1>
        you can drop me a message on{' '}
        <a 
          target='blank' 
          href='https://www.instagram.com/_i_wren_lix/' 
          className='text-pink-900 hover:cursor-pointer hover:line-through'
        >
          instagram
        </a>{' '}
        or{' '}
        <a 
          href='https://www.linkedin.com/in/mohammed-roshan02/' 
          className='text-blue-400 hover:cursor-pointer hover:line-through' 
          target='blank'
        >
          linkedIn
        </a>
        , or send me an{' '}
        <a 
          target='blank' 
          href="mailto:mohammedajeez2004@gmail.com?subject=Hi%20Bilal!" 
          className='text-emerald-500 hover:line-through hover:cursor-pointer'
        >
          mail
        </a>
        .
      </h1>
      <h5 className='text-center text-xl md:text-2xl bottom-0'>created with 💖 by me.</h5>
    </div>
  )
}

export default Contact
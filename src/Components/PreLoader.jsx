import React from 'react'
import './PreLoader.css'
import headphone from '../Assets/Headphone.gif'

const PreLoader = () => {
  return (
    <main id='loading-screen' className='bg-gradient-to-r from-slate-700 to-slate-500 flex justify-center items-center'>
        <img src={headphone} className="h-28 w-28" alt="" />
    </main>
  )
}

export default PreLoader
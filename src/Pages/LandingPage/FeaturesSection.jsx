import React from 'react'

const FeaturesSection = () => {
  return (
    <main>
      <section>
        <div className='sm:flex flex-row justify-center align-middle bg-[#1E465D]'>
            <div className='basis-1/2 p-4 sm:p-8 my-auto space-y-4'>
                <h5 className='uppercase text-gray-400 text-xl font-semibold'>
                    Advance freatures
                </h5>
                <h2 className='uppercase text-4xl font-bold text-white'>
                    New Sound  Aesthetics
                </h2>
                <p className='text-md  py-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam eligendi minima voluptatibus earum, dolores perspiciatis nam veniam labore quae?</p>
            </div>
            <div className='basis-1/2'>
              <img src="https://i.ibb.co/gm0zghf/f7.jpg" className='h-full w-full' alt="" />
            </div>
        </div>
      </section>  


      <section>
        <div className='sm:flex flex-row-reverse justify-center align-middle bg-[#C3BABF]'>
            <div className='basis-1/2 p-4 sm:p-8 my-auto space-y-4'>
                <h5 className='uppercase text-gray-600 text-xl font-semibold'>
                    Battery
                </h5>
                <h2 className='uppercase text-4xl font-bold text-gray-800'>
                    Live Longer Play Louder
                </h2>
                <p className='text-md  py-2 text-gray-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam eligendi minima voluptatibus earum, dolores perspiciatis nam veniam labore quae?</p>
            </div>

            <div className='basis-1/2'>
              <img src="https://i.ibb.co/Z8KrJT4/f8.jpg" className='h-full w-full' alt="" />
            </div>
        </div>
      </section>

      <section>
        <div className='sm:flex flex-row justify-center align-middle bg-[#272626]'>
            <div className='basis-1/2 p-4 sm:p-8 my-auto space-y-4'>
                <h5 className='uppercase text-gray-400 text-xl font-semibold'>
                    Design & Materials
                </h5>
                <h2 className='uppercase text-4xl font-bold text-white'>
                   Over-ear elegance
                </h2>
                <p className='text-md  py-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quam eligendi minima voluptatibus earum, dolores perspiciatis nam veniam labore quae?</p>
            </div>
            <div className='basis-1/2'>
              <img src="https://i.ibb.co/ry3d9Rm/f6.jpg" className='h-full w-full' alt="" />
            </div>
        </div>
      </section> 
       
    </main>
  )
}

export default FeaturesSection
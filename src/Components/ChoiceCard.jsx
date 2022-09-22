import React from 'react'
import best from '../Assets/best1.png'

const ChoiceCard = () => {
  return (
    <div className="sm:basis-1/3  m-2 relative">

    <div className="bg-[#8a848425] pt-28">
      <h2 className="text-center text-white text-lg font-semibold">
        Lorem, ipsum dolor.
      </h2>
      <div className="text-center p-4">
        <button className=" bg-gradient-to-r from-slate-700 via-gray-500 to-slate-600 px-5 rounded-3xl text-white py-2">
          BUY NOW
        </button>
      </div>
    </div>

    <div className="absolute -top-28">
      <img
        className="ease-in-out duration-700"
        src={best}
        alt=""
      />
    </div>
  </div>
  )
}

export default ChoiceCard
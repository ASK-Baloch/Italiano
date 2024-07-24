import Image from 'next/image'
import React from 'react'

const SingleProductPage   = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40 h-screen flex flex-col justify-around text-[#B40614] md:flex-row'>
      <div className="relative">
        <Image />
      </div>
    </div>
  )
}

export default SingleProductPage  
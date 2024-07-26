import Image from 'next/image'
import React from 'react'

const CartPage = () => {
  return (
    <div className='h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]'>
      {/* PRODUCT CONTAINER */}
      <div className=''>
         {/* SINGLE TEAM */}
         <div className=''>
            <Image src='/temporary/p1.png' alt='' width={100} height={100}/>
            <div className=''>
              <h1>sicilian</h1>
              <span>Large</span>
            </div>
            <h2>$79.98</h2>
            <span>X</span>
         </div>
      </div>
      {/* PAYMENT CONTAINER */}
      <div className=''>  
        <div className=''>
          <span className=''>Subtotal (3 items)</span>
          <span className=''>$81.70</span>
        </div>
        <hr  className=''/>
        <button className='bg-[#B40614] text-[#CFB54F] font-bold p-2 rounded-md uppercase w-1/2'>Checkout</button>
      </div>
    </div>
  )
}

export default CartPage
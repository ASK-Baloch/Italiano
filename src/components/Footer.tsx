import Link from 'next/link'
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='h-12 md:h-24 p-4 lg:p-20 xl:p-40 text-[#B40614] flex items-center justify-between'>
      <Link href='/' className='font-bold text-xl'>ITALIANO</Link>
      <span>&copy; {currentYear} ALL RIGHTS RESERVED</span>
    </div>
  )
}

export default Footer
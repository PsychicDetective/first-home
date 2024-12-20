import React from 'react'
import Links from './links/Links'
import Link from 'next/link'

function Navbar() {
  return (
    <div className='h-[100px] flex items-center justify-between'>
      <Link href={'/'} className='h-24 flex items-center justify-between'>
        Logo
      </Link>
      <div className='text-2xl font-bold'>
        <Links />
      </div>
    </div>
  )
}

export default Navbar
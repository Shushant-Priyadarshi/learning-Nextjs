import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between  mt-3  mb-3'>
        <div className='font-bold'>
            <Link href={"/"}><h1 className='cursor-pointer'>Home</h1></Link>
        </div>

        <div className='flex gap-6'>
            <Link href="user" className='cursor-pointer'>User</Link>
            <Link href="crushes" className='cursor-pointer'>Crushes</Link>
        </div>
    </div>
  )
}

export default Header
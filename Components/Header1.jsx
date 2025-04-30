import React from 'react'
import { User, Circle } from 'lucide-react';

function Header1() {
  return (
    <div className='top-0 w-full'>
        <div className='py-2 px-2 flex justify-end gap-10 md:px-5 lg:px-10 bg-[#09122C] border-b-1 border-white-300'>
            <a href='#' className= 'flex gap-2 text-white text-sm font-light text-right underline underline-offset-2 hover:text-gray-400'><Circle className="w-3 h-3 m-auto text-green-500" />System status</a>
            <a href='#' className='text-white text-sm font-light text-right underline underline-offset-2 hover:text-gray-400'>Support</a>
            <a href='#' className=' flex gap-2 text-white text-sm font-light text-right'><User className="w-4 h-4 m-auto" />Login</a>
        </div>
    </div>
  )
}

export default Header1
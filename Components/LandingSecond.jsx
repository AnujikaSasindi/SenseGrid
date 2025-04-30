import { assets } from '@/Assets/assets'
import Image from 'next/image'
import React from 'react'

function test() {
  return (
    <div className='h-full w-full'>
      <div className='w-full h-auto pt-50 pb-10'>
          <h1 className='text-[#09122C] text-6xl font-bold text-center'>Ship software to hardware.</h1>
          <p className='text-gray-500 pt-5 text-xl text-center'>Embed intelligence into anything, anywhere with Particle's 5G-connected, AI-accelerated single-board computer.</p>
      </div>
      <Image src={assets.landing_desktop} alt='' className='w-full h-screen m-auto pb-10 sm:w-auto' />
    </div>
  )
}

export default test
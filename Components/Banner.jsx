import React from 'react'

function Banner() {
  return (
    <div className='w-full h-screen px-5 py-5 mt-[-250] bg-gradient-to-r from-[#09122C] to-[#141E30]'>
        <h1 className='flex px-40 py-10 justify-center text-white text-center text-7xl/35 font-bold'>SenseGrid is everywhere</h1>
        <div className='w-4/5 h-fit m-auto flex justify-between'>
            <div className='w-full h-100'>
                <div className='flex justify-center px-5 py-5'>
                    <div className='w-15 h-15 border-1 border-gray-200 rounded-lg bg-gray-600'></div>
                    <div className='pl-5'>
                        <h2 className='text-4xl font-bold text-[#00faff]'>60 Billion</h2>
                        <p className='text-lg font-semibold text-white'>Messages delivered per month</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-100'>
                <div className='flex justify-center px-5 py-5'>
                    <div className='w-15 h-15 border-1 border-gray-200 rounded-lg bg-gray-600'></div>
                    <div className='pl-5'>
                        <h2 className='text-4xl font-bold text-[#00faff]'>60 Billion</h2>
                        <p className='text-lg font-semibold text-white'>Messages delivered per month</p>
                    </div>
                </div>
            </div>
            <div className='w-full h-100'>
                <div className='flex justify-center px-5 py-5'>
                    <div className='w-15 h-15 border-1 border-gray-200 rounded-lg bg-gray-600'></div>
                    <div className='pl-5'>
                        <h2 className='text-4xl font-bold text-[#00faff]'>60 Billion</h2>
                        <p className='text-lg font-semibold text-white'>Messages delivered per month</p>
                    </div>
                </div>
            </div>
        </div>
        <div>
            
        </div>

    </div>
  )
}

export default Banner
import React from 'react'

function LandingTop() {
  return (
    <div className='relative flex flex-col mt-[-90] top-0 w-full h-screen bg-gradient-to-t from-[#09122C] to-[#000]'>
        <h1 className='flex px-40 pt-50 justify-between text-white text-center text-8xl/35 font-bold'>Application infrastructure for intelligent devices</h1>
        <div className='flex flex-row justify-between m-auto mt-10 w-auto'>
            <button className='flex items-center text-lg font-semibold text-white py-2 px-5 sm:px-6 text-[#09122C] border border-solid border-[#182848] bg-[#4b6cb7]-400 rounded-3xl hover:bg-[#4b6cb7]'>
                Start for free 
                <svg xmlns="http://www.w3.org/2000/svg" width="23.828" height="23.66" className='text-white ml-5'>
                    <path stroke="currentColor" fill='currentColor' d="m11.817 18.021-6.161-6.083 6.179-6.262 1.579 1.579 2.828-2.828L11.817 0 0 11.976 11.835 23.66l4.405-4.405-2.828-2.828-1.595 1.594z"/><path stroke="currentColor" fill='currentColor' d="M21.811 9.841h-.099l-2.884-2.884v2.884h-7.017v4h7.017v3.116l5-5-2.017-2.018v-.098z"/>
                </svg>
            </button>
        </div>
    </div>
  )
}

export default LandingTop
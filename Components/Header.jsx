'use client'

import { assets } from '@/Assets/assets'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { platformItems, supportedItems, solutionItems, devItems } from '../Assets/assets'; 

function Header() {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleDropdown = (menuKey, isOpening) => {
        setOpenDropdown(isOpening ? menuKey : null);
        if (isOpening) setActiveIndex(0);
    };

    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className={`absolute sticky top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? 'bg-gradient-to-t from-[#182848] to-[#141E30]' : 'bg-transparent'
      }`}>
        <div className='py-7 px-5 md:px-12 lg:px-28 bg-transparent flex justify-between items-center'>
            <Image src={assets.logo} width={180} alt='' className='w-[130px] sm:w-auto' />
            <div className='flex justify-between items-center'>
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                <li className="relative">
                    <button
                        onMouseEnter={() => toggleDropdown('platform', true)}
                        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 md:w-auto text-white"
                    >
                        Platform
                        {openDropdown === 'platform' ? (
                            // Up arrow
                            <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l4-4 4 4" />
                            </svg>
                        ) : (
                            // Down arrow
                            <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        )}
                    </button>

                    {openDropdown === 'platform' && (
                        <div className="absolute flex mt-2 w-auto h-100 rounded-lg" onMouseLeave={() => toggleDropdown(false)} >
                            {/* Left Column */}
                            <div className="w-60 bg-[#213448] bg-opacity-75 p-0 rounded-l-lg" style={{ backgroundColor: 'rgba(33, 52, 72,  1)' }}>
                                {platformItems.map((item, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        className={`cursor-pointer px-5 py-3 rounded-sm transition-all font-medium text-white`}
                                        style={{
                                            backgroundColor: activeIndex === index
                                            ? 'rgba(84, 119, 146, 1)'  
                                            : 'rgba(33, 52, 72, 1)',     
                                        }}
                                    >
                                        <div className="text-base text-white">{item.title}</div>
                                        <div className="text-sm font-light text-gray-400">{item.titledesc}</div>
                                    </div>
                                ))}
                            </div>
                    
                            {/* Right Column */}
                            <div className="w-70 h-100 p-6 mb-4 bg-[#213448] flex flex-col gap-4 text-white rounded-r-lg" style={{ backgroundColor: '#273F4F' }}>
                                {platformItems[activeIndex]?.sections?.map((section, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                    <div className="text-2xl grayscale">{section.icon}</div>
                                    <div>
                                        <div className="font-semibold text-base">{section.title}</div>
                                        <div className="text-sm font-light text-gray-400 hover:text-[#ffff]">{section.desc}</div>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </li>
                <li className="relative">
                    <button
                        onMouseEnter={() => toggleDropdown('supported devices', true)}
                        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 md:w-auto text-white"
                    >
                        Supported Devices
                        {openDropdown === 'supported devices' ? (
                            // Up arrow
                            <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l4-4 4 4" />
                            </svg>
                        ) : (
                            // Down arrow
                            <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        )}
                    </button>

                    {openDropdown === 'supported devices' && (
                        <div className="absolute flex mt-2 w-auto h-100 rounded-lg" onMouseLeave={() => toggleDropdown(false)} >
                            {/* Left Column */}
                            <div className="w-60 bg-[#213448] bg-opacity-75 p-0 rounded-l-lg" style={{ backgroundColor: 'rgba(33, 52, 72,  1)' }}>
                                {supportedItems.map((item, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        className={`cursor-pointer px-5 py-3 rounded-sm transition-all font-medium text-white`}
                                        style={{
                                            backgroundColor: activeIndex === index
                                            ? 'rgba(84, 119, 146, 1)'  
                                            : 'rgba(33, 52, 72, 1)',     
                                        }}
                                    >
                                        <div className="text-base text-white">{item.title}</div>
                                        <div className="text-sm font-light text-gray-400">{item.titledesc}</div>
                                    </div>
                                ))}
                            </div>
                    
                            {/* Right Column */}
                            <div className="w-70 h-100 p-6 mb-4 bg-[#213448] flex flex-col gap-4 text-white rounded-r-lg" style={{ backgroundColor: '#273F4F' }}>
                                {supportedItems[activeIndex]?.sections?.map((section, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                    <div className="text-2xl grayscale">{section.icon}</div>
                                    <div>
                                        <div className="font-semibold text-base">{section.title}</div>
                                        <div className="text-sm font-light text-gray-400 hover:text-[#ffff]">{section.desc}</div>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </li>
                <li className="relative">
                    <button
                        onMouseEnter={() => toggleDropdown('solutions', true)}
                        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 md:w-auto text-white"
                    >
                        Solutions
                        {openDropdown === 'solutions' ? (
                            // Up arrow
                            <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l4-4 4 4" />
                            </svg>
                        ) : (
                            // Down arrow
                            <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        )}
                    </button>

                    {openDropdown === 'solutions' && (
                        <div className="absolute flex mt-2 w-auto h-100 rounded-lg" onMouseLeave={() => toggleDropdown(false)} >
                            {/* Left Column */}
                            <div className="w-60 bg-[#213448] bg-opacity-75 p-0 rounded-l-lg" style={{ backgroundColor: 'rgba(33, 52, 72,  1)' }}>
                                {solutionItems.map((item, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        className={`cursor-pointer px-5 py-3 rounded-sm transition-all font-medium text-white`}
                                        style={{
                                            backgroundColor: activeIndex === index
                                            ? 'rgba(84, 119, 146, 1)'  
                                            : 'rgba(33, 52, 72, 1)',     
                                        }}
                                    >
                                        <div className="text-base text-white">{item.title}</div>
                                        <div className="text-sm font-light text-gray-400">{item.titledesc}</div>
                                    </div>
                                ))}
                            </div>
                    
                            {/* Right Column */}
                            <div className="w-70 h-100 p-6 mb-4 bg-[#213448] flex flex-col gap-4 text-white rounded-r-lg" style={{ backgroundColor: '#273F4F' }}>
                                {solutionItems[activeIndex]?.sections?.map((section, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                    <div className="text-2xl grayscale">{section.icon}</div>
                                    <div>
                                        <div className="font-semibold text-base">{section.title}</div>
                                        <div className="text-sm font-light text-gray-400 hover:text-[#ffff]">{section.desc}</div>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </li>
                <li className="relative">
                    <button
                        onMouseEnter={() => toggleDropdown('developers', true)}
                        className="flex items-center justify-between w-full py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-gray-400 md:p-0 md:w-auto text-white"
                    >
                        Developers
                        {openDropdown === 'platform' ? (
                            // Up arrow
                            <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5l4-4 4 4" />
                            </svg>
                        ) : (
                            // Down arrow
                            <svg className="w-2.5 h-2.5 ms-2.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        )}
                    </button>

                    {openDropdown === 'developers' && (
                        <div className="absolute flex mt-2 w-auto h-100 rounded-lg" onMouseLeave={() => toggleDropdown(false)} >
                            {/* Left Column */}
                            <div className="w-60 bg-[#213448] bg-opacity-75 p-0 rounded-l-lg" style={{ backgroundColor: 'rgba(33, 52, 72,  1)' }}>
                                {devItems.map((item, index) => (
                                    <div
                                        key={index}
                                        onMouseEnter={() => setActiveIndex(index)}
                                        className={`cursor-pointer px-5 py-3 rounded-sm transition-all font-medium text-white`}
                                        style={{
                                            backgroundColor: activeIndex === index
                                            ? 'rgba(84, 119, 146, 1)'  
                                            : 'rgba(33, 52, 72, 1)',     
                                        }}
                                    >
                                        <div className="text-base text-white">{item.title}</div>
                                        <div className="text-sm font-light text-gray-400">{item.titledesc}</div>
                                    </div>
                                ))}
                            </div>
                    
                            {/* Right Column */}
                            <div className="w-70 h-100 p-6 mb-4 bg-[#213448] flex flex-col gap-4 text-white rounded-r-lg" style={{ backgroundColor: '#273F4F' }}>
                                {devItems[activeIndex]?.sections?.map((section, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                    <div className="text-2xl grayscale">{section.icon}</div>
                                    <div>
                                        <div className="font-semibold text-base">{section.title}</div>
                                        <div className="text-sm font-light text-gray-400 hover:text-[#ffff]">{section.desc}</div>
                                    </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded-sm md:bg-transparent md:text-white-700 md:p-0 md:hover:text-gray-400 md:w-auto">Pricing</a>
                </li>
            </ul>
            </div>

            <div className='flex justify-between items-center'>
                <button className='flex items-center font-medium py-1 px-3 sm:px-6 text-[#09122C] border border-solid border-[#ffff] bg-[#ffff] rounded-3xl hover:bg-gray-200'>
                    Contact Sales
                </button>
            </div>
        </div>
    </div>
  );
}

export default Header;

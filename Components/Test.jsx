'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { assets } from '@/Assets/assets';

export default function ScrollSection() {
  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        setIsVisible1(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        setIsVisible2(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.3,
      }
    );

    if (sectionRef1.current) observer1.observe(sectionRef1.current);
    if (sectionRef2.current) observer2.observe(sectionRef2.current);

    return () => {
      if (sectionRef1.current) observer1.unobserve(sectionRef1.current);
      if (sectionRef2.current) observer2.unobserve(sectionRef2.current);
    };
  }, []);

  return (
    <div>
      {/* Section 1 */}
      <div
        ref={sectionRef1}
        className="w-full h-100 px-5 py-5 text-center flex flex-col items-center justify-center"
      >
        <p className="text-xl font-semibold mb-4">Edge infrastructure - 1</p>

        <Image
          src={assets.image1}
          width={180}
          alt="Edge Infrastructure 1"
          className={`w-full sm:w-auto transform transition-all duration-700 ease-in-out
            ${
              isVisible1 && !isVisible2
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-[-80]'
            }
          `}
        />
      </div>

      {/* Section 2 */}
      <div
        ref={sectionRef2}
        className="w-full h-100 px-5 py-5 text-center flex flex-col items-center justify-center"
      >
        <p className="text-xl font-semibold mb-4">Edge infrastructure - 2</p>

        <Image
          src={assets.image2}
          width={180}
          alt="Edge Infrastructure 2"
          className={`w-full sm:w-auto transform transition-all duration-700 ease-in-out
            ${isVisible2 ? 'opacity-0 translate-y-[80]' : 'opacity-100 translate-y-[-80]'}
          `}
        />
      </div>
    </div>
  );
}

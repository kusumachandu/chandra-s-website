'use client'
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Carousel = ({ images }) => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const innerWidth = innerRef.current.scrollWidth;
    const containerWidth = containerRef.current.offsetWidth;
    const distance = innerWidth - containerWidth;

    // Function to animate the scroll
    const animateScroll = async () => {
      await controls.start({
        x: -distance,
        transition: {
          type: 'tween',
          duration: 10,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'loop',
        },
      });

      // Reset the scroll position to the starting point
      containerRef.current.scrollLeft = 0;
    };

    animateScroll();

    // Cleanup function
    return () => {
      controls.stop();
    };
  }, [controls, images]);

  return (
    <div className="image-container relative w-full overflow-hidden px-2">
      <div className="flex gap-2" ref={containerRef} style={{ width: '100%', overflow: 'hidden' }}>
        <motion.div className="flex gap-2" ref={innerRef}>
          {images.map((image, index) => (
            <div key={index} className="image-item rounded-xl w-full lg:h-[200px] kg:mr-2">
              <Image src={image} alt={`Image ${index}`} width={100} height={100} className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] lg:w-full rounded-xl lg:h-[200px] object-cover" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Carousel;

// components/Carousel.js
"use client"

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Carousel = ({ images }) => {

  const [displayedImages, setDisplayedImages] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Duplicate the images array to create a loop
    setDisplayedImages([...images, ...images]);
  }, [images]);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      // Check if the first set of images has completely scrolled
      if (container?.scrollLeft === 0) {
        // Reset the scroll position to the end of the first set of images
        container.scrollLeft = container.scrollWidth / 2;
      }
    };

    // Attach the scroll event listener
    container?.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      container?.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="image-container relative w-full overflow-hidden px-2">
      <motion.div 
        className="flex gap-2 animation-scroll ease-in-out infinite"
        initial = {{ x: '100vw' }}
        animate = {{ x: 0, transition: { duration: 2 } }}
      >
        {images.map((image, index) => (
          <div key={index} className="image-item rounded-xl w-full h-[200px] mr-2">
            <Image src={image} alt={`Image ${index}`} width={100} height={100} className="w-full rounded-xl h-[200px] object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;

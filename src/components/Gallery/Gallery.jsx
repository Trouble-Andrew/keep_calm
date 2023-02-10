import React, { useRef, useState, useCallback, useEffect } from 'react';
import {
  motion,
  useTransform,
  useSpring,
  useMotionValue,
  useScroll,
} from 'framer-motion';
import Title from '../Title/Title';
import Image from 'next/image';
import styles from './Gallery.module.scss';
import { galleryImages } from '@/data/galleryImages';

const Gallery = () => {
  const scrollRef = useRef(null);
  const ghostRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollRange, setScrollRange] = useState(0);
  const [viewportW, setViewportW] = useState(0);
  let clientWidth;

  const scrollPerc = useMotionValue(0);

  useEffect(() => {
    scrollRef && setScrollRange(scrollRef.current.scrollWidth);
  }, [scrollRef]);

  const onResize = useCallback((entries) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width);
      // clientWidth =
      //   entry.contentRect.width -
      //   window.innerWidth -
      //   document.documentElement.clientWidth;

      // console.log(window.innerWidth - document.documentElement.clientWidth);
      // console.log(entry.contentRect.width);
    }
  }, []);

  useEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries));
    resizeObserver.observe(ghostRef.current);
    return () => resizeObserver.disconnect();
  }, [onResize]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  useEffect(() => {
    return scrollYProgress.onChange((v) => scrollPerc.set(v));
  }, [scrollYProgress]);

  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW],
  );
  const physics = { damping: 15, mass: 0.27, stiffness: 55 };
  const spring = useSpring(transform, physics);

  return (
    <div ref={containerRef}>
      <div
        className={styles.container}
        style={{
          width: `100vw`,
          overflow: 'hidden',
        }}
      >
        <div className="container">
          <Title variant="h2" className={styles.title}>
            Lorem ipsum dolor sit amet
          </Title>
        </div>

        <motion.div ref={scrollRef} style={{ x: spring }}>
          <ul className={styles.list}>
            {galleryImages.map((image, index) => {
              return (
                <li key={index} className={styles.item}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill={true}
                    sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                  />
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className={styles.ghost}
      />
    </div>
  );
};

export default Gallery;

import { DivTagProps } from '@/utilities';
import css from './container.module.css';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';
import { useCallback, useLayoutEffect, useRef, useState } from 'react';

export type ContainerProps = DivTagProps & {
  bgImage?: string,
};

const Container = ({ children, bgImage = '/images/hex-texture.jpg', ...props }: ContainerProps) => {
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const setOuterHeight = useCallback(() => {
    if (outerRef.current === null || innerRef.current === null) return;
    const { height } = innerRef.current.getBoundingClientRect();
    outerRef.current.style.setProperty('--height', `calc(${height}px + 100vh)`);
}, [innerRef, outerRef]);

  // calculate height after render
  useLayoutEffect(() => {
    setOuterHeight(); // run initially
    window.addEventListener('scroll', setOuterHeight); // run again on resize
    window.addEventListener('resize', setOuterHeight); // run again on scroll
    return () => {
      window.removeEventListener('scroll', setOuterHeight) // clean up
      window.removeEventListener('resize', setOuterHeight) // clean up
    }
  }, [setOuterHeight]);

  return (
    <div ref={outerRef} {...props}>
      <ParallaxBanner
        className={css.banner}
        layers={[
          {
            image: bgImage,
            speed: -45,
            opacity: [1.5, -0.1],
          },
        ]}
        style={{ aspectRatio: '2 / 1' }}
      >
        <Parallax speed={20} opacity={[3, -1]}>
          <div ref={innerRef}>{children}</div>
        </Parallax>
      </ParallaxBanner>
    </div>
  );
};

export default Container;

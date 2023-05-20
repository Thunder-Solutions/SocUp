import { DivTagProps } from '@/utilities';
import css from './container.module.css';
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

export type ContainerProps = DivTagProps & {
  bgImage?: string,
};

const Container = ({ children, className = '', bgImage = '/images/hex-texture.jpg', ...props }: ContainerProps) => {
  return (
    <ParallaxBanner
      className={`${className} ${css.banner}`}
      layers={[
        {
          image: bgImage,
          speed: -45,
          opacity: [1.5, -0.1],
        },
      ]}
      style={{ aspectRatio: '2 / 1' }}
      {...props}
    >
      <Parallax speed={20} opacity={[3, -1]}>
        {children}
      </Parallax>
    </ParallaxBanner>
  );
};

export default Container;

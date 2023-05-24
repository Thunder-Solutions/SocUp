import { DivTagProps } from '@/utilities';
import css from './container.module.css';
import { ParallaxBanner } from 'react-scroll-parallax';
import { useContext } from 'react';
import { SplashContext } from '../splash/splashContext';

export type ContainerProps = DivTagProps & {
  bgImage?: string,
};

const Container = ({ children, bgImage = '/images/hex-texture.jpg', ...props }: ContainerProps) => {
  const splashContext = useContext(SplashContext);

  return (
    <div {...props} className={css.container} style={{
      backgroundImage: `url(${bgImage})`,
      paddingTop: splashContext.offset,
    }}>
      <div aria-hidden="true" className={css.hiddenContent}>{children}</div>
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
        <div className={css.content}>{children}</div>
      </ParallaxBanner>
    </div>
  );
};

export default Container;

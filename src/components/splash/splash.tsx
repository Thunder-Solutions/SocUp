import css from './splash.module.css';
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';
import { DivTagProps, getClassName } from '@/utilities';
import { SplashContext } from './splashContext';
import { useContext } from 'react';

export type SplashProps = DivTagProps;

const Splash = ({ children, className = '', ...props }: SplashProps) => {
	const image = useContext(SplashContext);

	const splashContainerClass = getClassName(
		{
			[css.dark]: image.characteristic === 'dark',
			[css.light]: image.characteristic === 'light',
		},
		css.splashContainer,
		className,
	);

	const splashClass = `${css.full} ${css.splash}`;

	return (
		<div {...props} className={splashContainerClass}>
			<ParallaxBanner
				className={splashClass}
				layers={[
					{
						image: image.src,
						speed: -45,
						opacity: [1.5, -0.1],
					},
				]}
				style={{ aspectRatio: '2 / 1' }}
			>
				{children}
			</ParallaxBanner>
			<Parallax className={css.scrollIndicator} opacity={[1, -0.5]}>
				<span className={css.scrollText}>SCROLL</span>
			</Parallax>
		</div>
	);
};

export default Splash;

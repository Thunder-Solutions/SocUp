import css from './splash.module.css';
import { ParallaxBanner } from 'react-scroll-parallax';
import { getClassName } from '@/utilities';
import { SplashContext } from './splashContext';
import { CSSProperties, useContext } from 'react';
import { SplashProps } from './splash';

const SplashBanner = ({ children, className = '', ...props }: SplashProps) => {
	const image = useContext(SplashContext);

	const splashContainerClass = getClassName(
		{
			[css.dark]: image.characteristic === 'dark',
			[css.light]: image.characteristic === 'light',
		},
		css.splashContainer,
		className,
	);

	const splashClass = `${css.banner} ${css.splash}`;

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
			/>
			<div className={css.splashBannerContent}>{children}</div>
		</div>
	);
};

export default SplashBanner;

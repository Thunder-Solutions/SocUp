import css from './siteHeader.module.css';
import { useScroll } from '@/utilities/hooks';
import { GenericTagProps, getClassName } from '@/utilities';
import MainNav from '@/components/mainNav/mainNav';
import { useContext } from 'react';
import { SplashContext } from '@/components/splash/splashContext';

export type SiteHeaderProps = {
	pageId?: string;
} & GenericTagProps;

const SiteHeader = ({ pageId, className = '', ...props }: SiteHeaderProps) => {
	const { characteristic } = useContext(SplashContext);
	const [scrolled] = useScroll();
	const headerClass = getClassName(
		{
			[css.splashHeader]: pageId === 'Home',
			[css.dkSplash]: characteristic === 'dark',
			[css.ltSplash]: characteristic === 'light',
			[css.scrolled]: pageId === 'Home' ? scrolled : true,
		},
		css.siteHeader,
		className,
	);
	return (
		<header {...props} className={headerClass}>
			<MainNav />
		</header>
	);
};

export default SiteHeader;

import css from './mainNav.module.css';
import { useEffect, useState } from 'react';
import NavMenu from '@/components/navMenu/navMenu';
import Icon from '@/components/icon/icon';
import Overlay from '@/components/overlay/overlay';

const content = {
	nav: [
		{
			text: 'The Game',
			href: '/the-game',
		},
		{
			text: 'For Business',
			href: '/for-business',
		},
		{
			text: 'Vision',
			href: '/vision',
		},
		{
			text: 'Connect',
			href: 'https://calendly.com/socup',
		},
		{
			text: 'Sign Up',
			href: '/sign-up',
		},
	],
};

export type MainNavProps = {
	open?: boolean;
};

const MainNav = ({ open: _open = false }: MainNavProps) => {
	const [open, setOpen] = useState(_open);
	useEffect(() => {
		setOpen(_open);
	}, [_open]);
	const toggle = () => {
		setOpen(!open);
	};
	return (
		<div className={css.navContainer}>
			<menu className={css.menu}>
				<button className={css.button} onClick={toggle}>
					<Icon className={css.buttonIcon} type="Menu" />
					<span>Menu</span>
				</button>
			</menu>
			<Overlay>
				<NavMenu mainItem={{ href: '/', text: 'Home' }} open={open} toggle={toggle} menuItems={content.nav} />
			</Overlay>
		</div>
	);
};

export default MainNav;

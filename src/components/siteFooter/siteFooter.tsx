'use client';
import Link from '@/components/link/link';
import { Fragment, useState } from 'react';
import css from './siteFooter.module.css';
import { GenericTagProps } from '@/utilities';
import Dialog from '../dialog/dialog';

const content = {
	siteMap: [
		{
			text: 'SocUp',
			href: '/',
		},
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
	photoCredits: [
		{
			href: 'https://www.freepik.com/free-photo/large-transportation-hub-city-digital-illustration-sense-future-technology_14402295.htm',
			text: 'Image by liuzishan on Freepik',
		},
		// {
		//   href: 'https://www.pexels.com/photo/black-and-white-textile-in-close-up-photography-3612931/',
		//   text: 'Photo by Tim Mossholder',
		// },
		{
			href: 'https://www.pexels.com/photo/geometric-pattern-on-chameleon-color-3612932/',
			text: 'Photo by Tim Mossholder',
		},
		{
			href: 'https://www.pexels.com/photo/group-of-friends-taking-a-group-photo-7149130/',
			text: 'Photo by Kindel Media',
		},
		{
			href: 'https://www.pexels.com/photo/two-person-in-long-sleeved-shirt-shakehand-955395/',
			text: 'Photo by Cytonn Photography',
		},
		{
			href: 'https://www.pexels.com/photo/gray-and-black-galaxy-wallpaper-2150/',
			text: 'Photo by Pixabay',
		},
	],
	copyright: `© SocUp, inc ${new Date().getFullYear()} - ALL RIGHTS RESERVED`,
};

export type SiteFooterProps = GenericTagProps;

const SiteFooter = ({ className = '', ...props }: SiteFooterProps) => {
	const footerClass = `${css.footer} ${className}`;

	const photoCreditsDialogState = useState(false);
	const openPhotoCreditsDialog = () => {
		photoCreditsDialogState[1](true);
	};

	return (
		<footer {...props} className={footerClass}>
			<div className={css.links}>
				<div className={css.siteMap}>
					{content.siteMap.map(({ text, href }, idx) => (
						<Fragment key={href}>
							<Link href={href} wrapperClass={css.siteMapLink}>
								{text}
							</Link>
							{idx === content.siteMap.length - 1 ? <></> : <> | </>}
						</Fragment>
					))}
				</div>
			</div>
			<div className={css.other}>
				<small>{content.copyright}</small>
				<button className={css.dialogLink} type="button" onClick={openPhotoCreditsDialog}>
					Photo Credits
				</button>
				<Dialog title="Photo Credits" openState={photoCreditsDialogState}>
					<ul className={css.list}>
						{content.photoCredits.map(({ href, text }) => (
							<li key={href}>
								<Link href={href}>{text}</Link>
							</li>
						))}
					</ul>
				</Dialog>
			</div>
		</footer>
	);
};

export default SiteFooter;

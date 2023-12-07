'use client';
import { DivTagProps } from '@/utilities';
import css from './page.module.css';
import { SiteFooter, SiteHeader, ParallaxProvider } from '@/components';

export type PageProps = DivTagProps;

const Page = ({ children, id, ...props }: PageProps) => {
	return (
		<ParallaxProvider>
			<div {...props} className={css.page} id={id}>
				<SiteHeader pageId={id} />
				<main className={css.main}>{children}</main>
				<SiteFooter />
			</div>
		</ParallaxProvider>
	);
};

export default Page;

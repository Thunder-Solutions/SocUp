import { CSSProperties, PropsWithChildren, createContext } from 'react';

export type SplashImage = {
	src: string;
	characteristic: 'light' | 'dark';
	offset: string;
};

export const DEFAULT_SPLASH: SplashImage = {
	src: '',
	characteristic: 'dark',
	offset: '4rem',
};

export const SplashContext = createContext<SplashImage>(DEFAULT_SPLASH);

export const SplashProvider = ({
	children,
	value,
}: PropsWithChildren<{
	value: SplashImage;
}>) => {
	return (
		<div style={{ '--offset': value.offset, 'display': 'contents' } as CSSProperties}>
			<SplashContext.Provider value={value}>{children}</SplashContext.Provider>
		</div>
	);
};

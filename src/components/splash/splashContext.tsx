'use client';
import { CSSProperties, PropsWithChildren, createContext } from 'react';

export type SplashImage = Partial<{
	src: string;
	characteristic: 'light' | 'dark';
	offset: string;
}>;

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
	const offset = value.offset ?? DEFAULT_SPLASH.offset;
	return (
		<div style={{ '--offset': offset, 'display': 'contents' } as CSSProperties}>
			<SplashContext.Provider value={{ ...DEFAULT_SPLASH, ...value }}>{children}</SplashContext.Provider>
		</div>
	);
};

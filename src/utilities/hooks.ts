import { NOOP } from './constants';
import { useState, useEffect, useRef } from 'react';
import { GenericFn } from './types';

type DeBounceOptions = {
	delay: number;
	reset: boolean;
};

/**
 * Uses timeouts with useRef to prevent excess function calls.
 */
export const useDebounce = <T, A>(
	debounceCallback: GenericFn<T, A>,
	options?: DeBounceOptions,
): GenericFn<T, Promise<A> | undefined> => {
	const DEFAULT_DEBOUNCE_OPTIONS = { delay: 100, reset: false };
	const { delay, reset } = {
		...DEFAULT_DEBOUNCE_OPTIONS,
		...options,
	};
	const debounceRef = useRef<boolean>(false);
	const timeoutRef = useRef<NodeJS.Timeout>(setTimeout(NOOP));
	return (...args) => {
		if (debounceRef.current) return;
		debounceRef.current = true;
		return new Promise((resolve) => {
			if (reset) clearTimeout(timeoutRef.current);
			timeoutRef.current = setTimeout(async () => {
				const result = await debounceCallback(...args);
				resolve(result);
				debounceRef.current = false;
			}, delay);
		});
	};
};

/**
 * A custom useState hook which updates on scroll
 */
export const useScroll = (element?: HTMLElement): [boolean, number[], number[]] => {
	const [scrolled, setScrolled] = useState(false);
	const [coords, setCoords] = useState([0, 0, 600, 800]);
	const [dimensions, setDimensions] = useState([800, 600]);
	const setScrollValues = useDebounce((_element: HTMLElement) => {
		const atBeginning = _element.scrollTop === 0 && _element.scrollLeft === 0;
		setScrolled(!atBeginning);
		setDimensions([_element.clientWidth, _element.clientHeight]);
		setCoords([
			_element.scrollTop,
			_element.scrollLeft,
			_element.scrollTop + _element.clientHeight,
			_element.scrollLeft + _element.clientWidth,
		]);
	});
	useEffect(() => {
		const _element = element ?? document.documentElement;
		const scrollElement = element ?? window;
		setScrollValues(_element); // set values initially
		const handleScroll = () => {
			setScrollValues(_element);
		};
		scrollElement.addEventListener('scroll', handleScroll);
		return () => {
			scrollElement.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return [scrolled, coords, dimensions];
};

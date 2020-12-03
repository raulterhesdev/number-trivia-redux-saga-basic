import { useEffect } from 'react';

export function useKeyPress(targetKey, callback) {
	useEffect(() => {
		const keyPressHandler = (e) => {
			// Either pass in the key name (ex: Enter) or the keyCode (ex: 13)
			if (e.key === targetKey || e.keyCode === targetKey) {
				callback(e);
			}
		};

		window.addEventListener('keypress', keyPressHandler);
		return () => {
			window.removeEventListener('keypress', keyPressHandler);
		};
	}, [callback, targetKey]);
}

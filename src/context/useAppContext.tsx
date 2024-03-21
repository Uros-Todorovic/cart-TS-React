import { useContext } from 'react';
import { AppContextValue, AppContext } from './context.tsx';
/**
 *
 * Access the context in any component using this hook
 *
 */

export const useAppContext = (): AppContextValue => {
	const ctxObj = useContext(AppContext);
	if (ctxObj === null) throw new Error('AppContext is null - that can not be the case');
	return ctxObj;
};

export default useAppContext;

import { createContext, useReducer, useEffect, ReactNode, useState } from 'react';
import { reducer } from './reducer';
import { CLEAR_CART } from './actions.tsx';

/**
 *
 * Global Context
 *
 */

export type AppState = {
	loading: boolean;
	cart: Array<string>;
};

export type AppContextValue = AppState & {
	removeFromBag: () => void;
};

export const AppContext = createContext<AppContextValue | null>(null);

/**
 *
 * Initial State
 *
 */

const initialState: AppState = {
	loading: false,
	cart: [],
};

/**
 *
 * Provider component to wrap around your whole application. This provides access to the context values defined above.
 *
 */

type AppProviderProps = {
	children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const removeFromBag = () => {
		dispatch({ type: 'REMOVE' });
	};

	const ctxObj: AppContextValue = {
		loading: state.loading,
		cart: state.cart,
		removeFromBag,
	};

	return <AppContext.Provider value={ctxObj}>{children}</AppContext.Provider>;
};

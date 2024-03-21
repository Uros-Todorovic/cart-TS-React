import { createContext, useReducer, useEffect, ReactNode, useState } from 'react';
import { reducer } from './reducer';
import { CLEAR_CART, REMOVE, INCREASE, DECREASE } from './actions.tsx';
import cartItems, { CartItemType } from '../data.tsx';

/**
 *
 * Global Context
 *
 */

export type AppState = {
	loading: boolean;
	cart: Map<string, CartItemType>;
};

export type AppContextValue = AppState & {
	clearCart: () => void;
	remove: (id: string) => void;
	increase: (id: string) => void;
	decrease: (id: string) => void;
};

export const AppContext = createContext<AppContextValue | null>(null);

/**
 *
 * Initial State
 *
 */

const initialState: AppState = {
	loading: false,
	cart: new Map(cartItems.map((item) => [item.id, item])),
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

	const clearCart = () => {
		const { type } = CLEAR_CART;
		dispatch({ type });
	};

	const remove = (id: string) => {
		const { type } = REMOVE;
		dispatch({ type, payload: { id } });
	};

	const increase = (id: string) => {
		const { type } = INCREASE;
		dispatch({ type, payload: { id } });
	};

	const decrease = (id: string) => {
		const { type } = DECREASE;
		dispatch({ type, payload: { id } });
	};

	const ctxObj: AppContextValue = {
		loading: state.loading,
		cart: state.cart,
		clearCart,
		remove,
		increase,
		decrease,
	};

	return <AppContext.Provider value={ctxObj}>{children}</AppContext.Provider>;
};

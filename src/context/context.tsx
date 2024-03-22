import { createContext, useReducer, useEffect, ReactNode } from 'react';
import { reducer } from './reducer';
import { CLEAR_CART, REMOVE, INCREASE, DECREASE, LOADING } from './actions.tsx';
import cartItems, { CartItemType } from '../data.tsx';
import { getTotals } from '../utils.tsx';
const url = 'https://course-api.com/react-useReducer-cart-project';

/**
 *
 * Global Context
 *
 */

export type AppState = {
	loading: boolean;
	cart: Map<string, CartItemType>;
	totalAmount: number;
	totalCost: number;
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
	totalAmount: 0,
	totalCost: 0,
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

	const { totalAmount, totalCost } = getTotals(state.cart);

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

	const fetchData = async () => {
		const { type } = LOADING;
		dispatch({ type: type });
		const response = await fetch(url);
		const cart: CartItemType[] = await response.json();

		dispatch({ type: 'DISPLAY_ITEMS', payload: { cart } });
	};

	useEffect(() => {
		fetchData();
	}, []);

	const ctxObj: AppContextValue = {
		loading: state.loading,
		cart: state.cart,
		clearCart,
		remove,
		increase,
		decrease,
		totalAmount,
		totalCost,
	};

	return <AppContext.Provider value={ctxObj}>{children}</AppContext.Provider>;
};

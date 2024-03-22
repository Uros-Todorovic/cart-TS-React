/**
 *  CLEAR_CART Action and Dispatch Constant
 *
 */

import { CartItemType } from '../data';

export type CLEAR_CART_ACTION = {
	type: 'CLEAR_CART';
};

export const CLEAR_CART: CLEAR_CART_ACTION = {
	type: 'CLEAR_CART',
};

/**
 *  REMOVE Action and Dispatch Constant
 *
 */

export type REMOVE_ACTION = {
	type: 'REMOVE';
	payload: { id: string };
};

export const REMOVE: REMOVE_ACTION = {
	type: 'REMOVE',
	payload: { id: '' },
};

/**
 *  INCREASE Action  and Dispatch Constant
 *
 */

export type INCREASE_ACTION = {
	type: 'INCREASE';
	payload: { id: string };
};

export const INCREASE: INCREASE_ACTION = {
	type: 'INCREASE',
	payload: { id: '' },
};

/**
 *  DECREASE Action  and Dispatch Constant
 *
 */

export type DECREASE_ACTION = {
	type: 'DECREASE';
	payload: { id: string };
};

export const DECREASE: DECREASE_ACTION = {
	type: 'DECREASE',
	payload: { id: '' },
};

/**
 *  LOADING Action  and Dispatch Constant
 *
 */

export type LOADING_ACTION = {
	type: 'LOADING';
};

export const LOADING: LOADING_ACTION = {
	type: 'LOADING',
};

/**
 *  DISPLAY_ITEMS Action  and Dispatch Constant
 *
 */

export type DISPLAY_ITEMS_ACTION = {
	type: 'DISPLAY_ITEMS';
	payload: {
		cart: CartItemType[];
	};
};

export const DISPLAY_ITEMS = {
	type: 'DISPLAY_ITEMS',
};

export type Actions =
	| CLEAR_CART_ACTION
	| REMOVE_ACTION
	| INCREASE_ACTION
	| DECREASE_ACTION
	| LOADING_ACTION
	| DISPLAY_ITEMS_ACTION;

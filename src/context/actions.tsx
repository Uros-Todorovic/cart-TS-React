export type CLEAR_CART = {
	type: 'CLEAR_CART';
};

export type REMOVE = {
	type: 'REMOVE';
};

export type INCREASE = {
	type: 'INCREASE';
};

export type DECREASE = {
	type: 'DECREASE';
};

export type LOADING = {
	type: 'LOADING';
};

export type DISPLAY_ITEMS = {
	type: 'DISPLAY_ITEMS';
};

export type Actions = CLEAR_CART | REMOVE | INCREASE | DECREASE | LOADING | DISPLAY_ITEMS;

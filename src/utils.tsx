import { CartItemType } from './data';

type getTotalsProps = Map<string, CartItemType>;

export const getTotals = (cart: getTotalsProps) => {
	let totalAmount = 0;
	let totalCost = 0;

	for (const { amount, price } of cart.values()) {
		totalAmount += amount;
		totalCost += amount * +price;
	}

	return { totalAmount, totalCost };
};

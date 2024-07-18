import { writable } from 'svelte/store';
import type { ProductDto } from './api';

interface CartProduct extends ProductDto {
	amount: number;
	isChosen: boolean;
}

function createCart() {
	const { subscribe, update, set } = writable<CartProduct[]>([]);

	return {
		subscribe,
		set,
		addNewItem: (product: ProductDto) => update((cart) => {
			return [ ...cart, { ...product, amount: 1, isChosen: true } ];
		}),
		removeItem: (id: number) => update((cart) => {
			return cart.filter(item => item.id !== id);
		}),
		setAmount: (id: number, amount: number) => update((cart) => {
			return cart.map((item) => item.id === id ? { ...item, amount } : item);
		}),
		increaseItemAmount: (id: number) => update((cart) => {
			return cart.map((item) => item.id === id ? { ...item, amount: item.amount + 1 } : item);
		}),
		decreaseItemAmount: (id: number) => update((cart) => {
			return cart.map((item) => item.id === id ? { ...item, amount: item.amount - 1 } : item);
		}),
		toggleSelectAll: () => update((cart) => {
			const isSelectedAll = cart.every((item) => item.isChosen);
			return cart.map((item) => ({...item, isChosen: !isSelectedAll}));
		})
	}
}

export const cart = createCart();
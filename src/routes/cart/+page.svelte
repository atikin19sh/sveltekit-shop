<script lang="ts">
	import { cart } from '../stores';
	import CategoryBadge from '../../components/CategoryBadge.svelte';
	import AddItemToCartButton from '../../components/AddItemToCartButton.svelte';

	$: totalCost = $cart.reduce((acc, item) => item.isChosen ? acc + item.amount * item.price : acc, 0);

	const styles = {
		wrapper: "flex flex-col",
		title: "h3 self-start mb-8",
		content: "grid grid-cols-[2fr_1fr] gap-8",
		main: "flex flex-col gap-4",
		cartItems: "flex flex-col gap-8",
		cartItem: "card p-4 w-full flex gap-8",
	}
</script>

<div class={styles.wrapper}>
	<h3 class={styles.title}>
		Корзина
	</h3>
	<div class={styles.main}>
		<div class="flex gap-2 items-center">
			<input class="checkbox" type="checkbox" checked={$cart.every(item => item.isChosen)} on:change={cart.toggleSelectAll}/>
			Выбрать все
		</div>
		<div class={styles.content}>
			<div class={styles.cartItems}>
				{#each $cart as cartItem}
					<div class={styles.cartItem}>
						<input class="checkbox" type="checkbox" bind:checked={cartItem.isChosen}/>
						<div class="flex flex-col gap-2">
							<CategoryBadge category={cartItem.category}/>
							<img class="w-[200px]" src={cartItem.thumbnail} alt={cartItem.title}/>
						</div>
						<div class="h4 w-full">
							{cartItem.title}
						</div>
						<div class="flex flex-col gap-4 self-end text-right w-80">
							<span class="h5 font-bold">${(cartItem.price * cartItem.amount).toFixed(2)}</span>
							<span>${cartItem.price}/шт.</span>
							<AddItemToCartButton item={cartItem} />
						</div>
					</div>
				{/each}
			</div>
			<div class="card p-4 h4 font-bold">
				Итого: ${totalCost.toFixed(2)}
			</div>
		</div>
	</div>
</div>
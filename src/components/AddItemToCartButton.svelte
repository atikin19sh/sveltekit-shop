<script lang="ts">
	import { afterUpdate } from 'svelte';
	import IconAdd from '../components/IconAdd.svelte';
	import IconRemove from '../components/IconRemove.svelte';
	import { cart } from '../routes/stores';
	import type { ProductDto } from '../routes/api';

	export let item: ProductDto;

	const {id} = item;

	$: itemInCart = $cart.find((cartItem) => id === cartItem.id);
	$: amount = itemInCart ? itemInCart.amount : 0;

	afterUpdate(() => {
		if (amount <= 0) {
			cart.removeItem(id);
		}
	})
</script>

{#if itemInCart}
	<div class="btn-group variant-filled-secondary">
		<button class="variant-filled-secondary"
						on:click={() => cart.decreaseItemAmount(id)}>
			<IconRemove/>
		</button>
		<input class="variant-filled-surface text-center font-semibold w-16"
					 value={amount}
					 on:input={(event) => cart.setAmount(id, Number(event.currentTarget.value))}/>
		<button class="variant-filled-secondary"
						on:click={() => cart.increaseItemAmount(id)}>
			<IconAdd/>
		</button>
	</div>
{:else}
	<button class="btn variant-filled font-semibold px-12"
					on:click={() => cart.addNewItem(item)}>
		В КОРЗИНУ
	</button>
{/if}
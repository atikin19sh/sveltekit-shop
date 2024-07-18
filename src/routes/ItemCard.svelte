<script lang="ts">
	import type { ProductDto } from './api';
	import CategoryBadge from '../components/CategoryBadge.svelte';
	import AddItemToCartButton from '../components/AddItemToCartButton.svelte';

	export let item: ProductDto;

	const {id, title, category, price, thumbnail} = item;

	const styles = {
		wrapper: "card card-hover p-4 flex flex-col",
		itemInfo: "p-4 flex-1 flex flex-col items-start gap-2",
		itemTitle: "h4 font-semibold",
		itemPrice: "h4 font-semibold",
		itemCardFooter: "card-footer flex flex-col gap-4 items-start",
	}
</script>

<div class={styles.wrapper}>
	<a href={`/products/${id}`} class="card-header">
		<img src={thumbnail} alt={title}/>
	</a>

	<div class={styles.itemInfo}>
		<CategoryBadge {category}/>
		<a href={`/products/${id}`} class={styles.itemTitle}>{title}</a>
	</div>

	<div class={styles.itemCardFooter}>
		<div class={styles.itemPrice}>
			${price}
		</div>
		<AddItemToCartButton {item}/>
	</div>
</div>

<style>
	.card-hover:hover {
			background-color: rgb(var(--color-surface-700) / 1);
	}
</style>
<script lang="ts">
	import type { PageData } from '../../../../.svelte-kit/types/src/routes/products/[slug]/$types';
	import CategoryBadge from '../../../components/CategoryBadge.svelte';
	import AddItemToCartButton from '../../../components/AddItemToCartButton.svelte';
	import Rating from '../../../components/Rating.svelte';

	export let data: PageData;

	const {title, description, category, price, images, rating, reviews} = data;

	const styles = {
		wrapper: "flex flex-col gap-8",
		product: "grid grid-cols-[3fr_2fr] gap-8",
		productImages: "flex flex-col items-center justify-center px-24",
		productInfo: "card p-8 flex flex-col gap-8 items-start",
	}
</script>

<div class={styles.wrapper}>
	<h3 class="h3 self-start">
		Информация о товаре
	</h3>

	<div class={styles.product}>
		<div class={styles.productImages}>
			<img src={images[0]} alt={title}/>
		</div>

		<div class="flex flex-col justify-center">
			<div class={styles.productInfo}>
				<CategoryBadge {category}/>
				<h4 class="h2 font-semibold">{title}</h4>
				<div>
					<Rating {rating}/>
					<div class="ml-2 pt-2">Отзывов: {reviews.length}</div>
				</div>
				<div class="h2 font-semibold">
					${price}
				</div>
				<AddItemToCartButton item={data}/>
			</div>
		</div>

		<div>
			<div class="card p-8 flex flex-col gap-4">
				<h5 class="h4 font-semibold">Описание</h5>
				<div>{description}</div>
			</div>
		</div>

		<div class="flex flex-col gap-8 card p-8">
			<h5 class="h4 font-semibold">Отзывы</h5>
			<div>
				<div class="flex items-center justify-center">
					<span class="h3 font-bold">{rating}</span>
					<Rating {rating}/>
				</div>
				<span>На основе {reviews.length} оценок</span>
			</div>
			<div class="flex flex-col gap-8">
				{#each reviews as review}
					<div class="flex flex-col gap-2 card p-4">
						<span class="h6 font-semibold">{review.reviewerName}</span>
						<Rating rating={review.rating}/>
						<div class="italic">{review.comment}</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
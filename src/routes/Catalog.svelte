<script lang="ts">
	import Item from './ItemCard.svelte';

	import { page } from '$app/stores';
</script>

<section class="flex flex-col gap-4 mb-8 w-full items-center">
	<h3 class="h3 self-start">
		Каталог товаров
	</h3>

	<div class="grid grid-cols-2 md:grid-cols-4 gap-4">
		{#await $page.data.products}
			Загружаем каталог...
		{:then products}
			{#each products as product}
				<Item item={product}/>
			{/each}
		{:catch error}
			<p>При загрузке каталога возникла ошибка: {error.message}</p>
		{/await}
	</div>
</section>

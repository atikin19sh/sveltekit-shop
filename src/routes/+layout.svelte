<script>
	import '../app.css';
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="flex flex-col min-vh-100 w-[1200px]">
	<Header></Header>

	<main>
		<slot></slot>
	</main>
</div>

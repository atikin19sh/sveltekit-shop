<script lang="ts">
	import { Ratings } from '@skeletonlabs/skeleton';

	export let rating: number;
</script>

<Ratings value={rating} max={5}>
	<svelte:fragment slot="empty">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" {...$$props}><path fill="gold" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4l-3.76 2.27l1-4.28l-3.32-2.88l4.38-.38L12 6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>
	</svelte:fragment>
	<svelte:fragment slot="half">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" {...$$props}><path fill="gold" d="m19.65 9.04l-4.84-.42l-1.89-4.45c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.73l3.67-3.18c.67-.58.32-1.68-.56-1.75M12 15.4V6.1l1.71 4.04l4.38.38l-3.32 2.88l1 4.28z"/></svg>
	</svelte:fragment>
	<svelte:fragment slot="full">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" {...$$props}><path fill="gold" d="m14.43 10l-1.47-4.84c-.29-.95-1.63-.95-1.91 0L9.57 10H5.12c-.97 0-1.37 1.25-.58 1.81l3.64 2.6l-1.43 4.61c-.29.93.79 1.68 1.56 1.09l3.69-2.8l3.69 2.81c.77.59 1.85-.16 1.56-1.09l-1.43-4.61l3.64-2.6c.79-.57.39-1.81-.58-1.81h-4.45z"/></svg>
	</svelte:fragment>
</Ratings>
import type { PageLoad } from '../../../../.svelte-kit/types/src/routes';
import { getProductById } from '../../api';

export const load: PageLoad = async ({ params }) => {
	const productId = Number(params.slug);

	return await getProductById(productId);
};
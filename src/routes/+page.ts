// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
import { getProducts } from './api';
import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async () => {
	return await getProducts();
}
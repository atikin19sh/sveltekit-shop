interface Review {
	rating: number;
	comment: string;
	date: string;
	reviewerName: string;
}

export interface ProductDto {
	id: number;
	title: string;
	description: string;
	category: string;
	images: string[];
	rating: number;
	reviews: Review[];
	price: number;
	thumbnail: string;
}

export interface ProductsResponse {
	products: ProductDto[];
	total: number;
	limit: number;
}

export const getProducts = async (): Promise<ProductsResponse> => {
	const response = await fetch('https://dummyjson.com/products?limit=10');
	return response.json();
}

export const getProductById = async (id: number): Promise<ProductDto> => {
	const response = await fetch(`https://dummyjson.com/products/${id}`);
	return response.json();
}
import { Product } from '../models/ProductModel';

const productsMock: Product[] = [
	{
		id: 1,
		name: 'Assinatura básica',
		value: 49.99,
		description:
			"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
  {
		id: 2,
		name: 'Assinatura intermediária',
		value: 69.99,
		description:
			"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
	},
];

export default productsMock;

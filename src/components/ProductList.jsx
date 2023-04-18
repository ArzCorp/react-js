import { PRODUCTS } from '../utils/constants'
import Product from './Product'

import '../css/ProductList.css'

export default function ProductList() {
	return (
		<section className="product_list">
			{PRODUCTS.map((product) => (
				<Product key={product.id} {...product} />
			))}
		</section>
	)
}

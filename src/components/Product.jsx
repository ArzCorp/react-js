import image from '../assets/botella.jpg'
import '../css/Product.css'

export default function Product({ name, price, description }) {
	return (
		<article className="product__container">
			<picture className="product-img__container">
				<img src={image} alt={name} />
			</picture>
			<aside>
				<h3 className="product__name">{name}</h3>
				<div className="product__container--price">
					<p>Precio:</p>
					<p className="product__price">${price}</p>
				</div>
				<div className="product__container--description">
					<p className="product__description--title">Descripcion</p>
					<p className="product__description">{description}</p>
				</div>
			</aside>
		</article>
	)
}

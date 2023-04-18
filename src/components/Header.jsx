import '../css/Header.css'

export default function Header() {
	return (
		<header className="header__container">
			<h1 className="header__logo">Rouss</h1>
			<div>
				<input type="text" placeholder="...buscar producto" />
			</div>
		</header>
	)
}

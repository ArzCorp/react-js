import { Fragment, useEffect, useState } from 'react'
import { EMPTY_STRING, FALSE, PRODUCTS, TRUE } from '../utils/constants'
import { getRandomCatImageApi, getRandomFactApi } from '../utils/api'
import { getFirstWord } from '../utils/getFirstWord'
import ProductList from '../components/ProductList'
import Header from '../components/Header'

export default function Home() {
	const [loading, setLoading] = useState(FALSE)
	const [catImage, setCatImage] = useState(EMPTY_STRING)

	const getRandomCatImage = async () => {
		setLoading(TRUE)
		const randomFactResponse = await getRandomFactApi()
		const word = getFirstWord(randomFactResponse.fact)
		const imageResponse = await getRandomCatImageApi(word)
		setCatImage(imageResponse.url)
	}

	useEffect(() => {
		getRandomCatImage()
	}, [])

	return (
		<Fragment>
			<Header />
			<ProductList />
		</Fragment>
	)
}

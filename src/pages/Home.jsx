import { useEffect, useState } from 'react'
import { EMPTY_STRING, FALSE, TRUE } from '../utils/constants'
import { getRandomCatImageApi, getRandomFactApi } from '../utils/api'
import { getFirstWord } from '../utils/getFirstWord'

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
		<main>
			<h1>Generate random cat with word</h1>
			<button onClick={getRandomCatImage}>Generate image</button>
			<p
				style={{
					display: loading ? 'block' : 'none',
				}}
			>
				Cargando...
			</p>
			<img
				onLoad={() => {
					setLoading(false)
				}}
				style={{
					display: loading ? 'none' : 'block',
				}}
				src={catImage}
				alt="random cat image generated"
			/>
		</main>
	)
}

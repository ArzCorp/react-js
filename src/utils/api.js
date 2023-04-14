import { RANDOM_CAT_IMAGE_API_URL, RANDOM_FACT_API_URL } from './constants'

export const getRandomFactApi = async () => {
	try {
		const request = await fetch(RANDOM_FACT_API_URL)
		return await request.json()
	} catch (error) {
		console.error('getRandomFactApi', error.message)
	}
}

export const getRandomCatImageApi = async (word) => {
	try {
		const URL = `${RANDOM_CAT_IMAGE_API_URL}/${word}`
		return await fetch(URL)
	} catch (error) {
		console.error('getRandomCatImage', error.message)
	}
}

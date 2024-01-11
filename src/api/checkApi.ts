import axios from 'axios';

export async function checkApi() {
	try {
		const result = await axios.get('http://localhost:3000/');
		return result.data;
	} catch (error) {
		return null;
	}
}

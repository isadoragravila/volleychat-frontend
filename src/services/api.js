/* eslint-disable no-unused-vars */
export default function urlAPI(endpoint) {
	// eslint-disable-next-line no-undef
	const baseUrl = process.env.REACT_APP_API_BASE_URL;
  
	const url = `${baseUrl}/${endpoint}`;
	return url;
}
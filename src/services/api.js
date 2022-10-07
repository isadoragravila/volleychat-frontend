/* eslint-disable no-unused-vars */
export default function urlAPI(endpoint) {
	const prod = `https://volleychat.herokuapp.com/${endpoint}`;
	const test = `http://localhost:5000/${endpoint}`;
	return test;
}
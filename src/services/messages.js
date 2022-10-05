import axios from "axios";
import urlAPI from "./api";

export async function createMessage(body, config, params) {
	return axios.post(urlAPI(`messages/${params}`), body, config)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			alert(err.response.data);
		});
}

export async function getMessages(config, params) {
	return axios.get(urlAPI(`messages/${params}`), config)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			alert(err.response.data);
		});
}
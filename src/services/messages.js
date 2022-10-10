import axios from "axios";
import urlAPI from "./api";

export async function createMessage(body, config, params) {
	return axios.post(urlAPI(`messages/${params}`), body, config);
}

export async function getMessages(config, params) {
	return axios.get(urlAPI(`messages/${params}`), config);
}
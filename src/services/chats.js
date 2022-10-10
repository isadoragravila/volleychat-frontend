import axios from "axios";
import urlAPI from "./api";

export async function createChat(body, config, params) {
	return axios.post(urlAPI(`chats/create/${params}`), body, config); 
}

export async function getChatrooms(config, params) {
	return axios.get(urlAPI(`chats/${params}`), config);
}

export async function getChatsByCreator(config, params) {
	return axios.get(urlAPI(`chats/creator/${params}`), config);
}
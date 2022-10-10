import axios from "axios";
import urlAPI from "./api";

export async function getParticipants(config, params) {
	return axios.get(urlAPI(`participants/${params}`), config);
}

export async function insertParticipants(config, params) {
	return axios.post(urlAPI(`participants/${params}`), null, config);
}

export async function removeParticipant(config, params) {
	return axios.delete(urlAPI(`participants/${params}`), config);
}

export async function updateStatus(config, params) {
	return axios.patch(urlAPI(`participants/${params}/status`), null, config);
}

export async function getProfileById(config, params) {
	return axios.get(urlAPI(`profile/${params}`), config);
}
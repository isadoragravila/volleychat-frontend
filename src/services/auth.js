import axios from "axios";
import urlAPI from "./api";

export async function createUser(body) {
	return axios.post(urlAPI("sign-up"), body);
}

export async function loginUser(body) {
	return axios.post(urlAPI("sign-in"), body);
}

export async function getProfile(config) {
	return axios.get(urlAPI("profile"), config);
}
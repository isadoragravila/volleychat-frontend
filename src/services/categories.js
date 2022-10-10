import axios from "axios";
import urlAPI from "./api";

export async function getCategories(config) {
	return axios.get(urlAPI("categories"), config);
}
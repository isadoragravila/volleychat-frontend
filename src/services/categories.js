import axios from "axios";
import urlAPI from "./api";

export async function getCategories(config) {
	return axios.get(urlAPI("categories"), config)
		.then((res) => {
			return res.data;
		})
		.catch((err) => {
			alert(err.response.data);
		});
}
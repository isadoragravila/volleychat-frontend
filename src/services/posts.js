import axios from "axios";
import urlAPI from "./api";

export async function getPosts(config, params) {
	return axios.get(urlAPI(`posts/${params}`), config)
		.then((res) => {
			return res;
		})
		.catch((err) => {
			alert(err.response.data);
		});
}
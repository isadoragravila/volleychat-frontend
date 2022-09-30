import axios from "axios";
import urlAPI from "./api";

export async function createChat(body, config, params) {
    return axios.post(urlAPI(`chats/create/${params}`), body, config)
        .then((res) => {
            return res.status;
        })
        .catch((err) => {
            alert(err.response.data);
        });
}

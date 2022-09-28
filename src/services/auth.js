import axios from "axios";
import urlAPI from "./api";

export async function createUser(body) {
    return axios.post(urlAPI("sign-up"), body)
        .then((res) => {
            return res.status;
        })
        .catch((err) => {
            return err.response.data;
        });
}

export async function loginUser(body) {
    return axios.post(urlAPI("sign-in"), body)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert(err.response.data);
        });
}
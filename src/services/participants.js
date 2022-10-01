import axios from "axios";
import urlAPI from "./api";

export async function getParticipants(config, params) {
    return axios
        .get(urlAPI(`participants/${params}`), config)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            alert(err.response.data);
        });
}

export async function insertParticipants(config, params) {
    return axios
        .post(urlAPI(`participants/${params}`), null, config)
        .then((res) => {
            return res.status;
        })
        .catch((err) => {
            alert(err.response.data);
        });
}

export async function removeParticipant(config, params) {
    return axios
        .delete(urlAPI(`participants/${params}`), config)
        .then((res) => {
            return res.status;
        })
        .catch((err) => {
            alert(err.response.data);
        });
}
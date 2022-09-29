import { getProfile } from "../services/auth";

export async function checkToken(navigate, setToken, page) {
    const tokenStorage = localStorage.getItem("token");
    localStorage.removeItem("image");

    if (tokenStorage) {
        const body = null;
        const config = {
            headers: {
                Authorization: `Bearer ${tokenStorage}`
            }
        }
        const response = await getProfile(config);

        if (response) {
            setToken(tokenStorage);
            localStorage.setItem("image", response.image);
            navigate(`/${page}`);
        } else {
            localStorage.removeItem("token");
            navigate('/');
        }
    } else {
        navigate('/');
    }
}
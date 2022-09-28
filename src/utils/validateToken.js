import { validateToken } from "../services/auth";

export async function checkToken(navigate, setToken, page) {
    const tokenStorage = localStorage.getItem("token");

    if (tokenStorage) {
        const body = null;
        const config = {
            headers: {
                Authorization: `Bearer ${tokenStorage}`
            }
        }
        const response = await validateToken(config);

        if (response) {
            setToken(tokenStorage);
            navigate(`/${page}`);
        } else {
            localStorage.removeItem("token");
            navigate('/');
        }
    } else {
        navigate('/');
    }
}
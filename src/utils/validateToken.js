import { getProfile } from "../services/auth";

export async function checkToken(navigate, setToken, page) {
	const tokenStorage = localStorage.getItem("token");
	localStorage.removeItem("image");
	localStorage.removeItem("bio");
	localStorage.removeItem("username");

	if (tokenStorage) {
		const config = {
			headers: {
				Authorization: `Bearer ${tokenStorage}`
			}
		};
		const response = await getProfile(config);

		if (response) {
			setToken(tokenStorage);
			localStorage.setItem("image", response.image);
			localStorage.setItem("bio", response.bio);
			localStorage.setItem("username", response.username);
			navigate(`/${page}`);
		} else {
			localStorage.removeItem("token");
			localStorage.removeItem("userId");
			navigate("/");
		}
	} else {
		navigate("/");
	}
}
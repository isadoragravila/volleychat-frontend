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

		try {
			const response = await getProfile(config);
			setToken(tokenStorage);
			localStorage.setItem("image", response.data.image);
			localStorage.setItem("bio", response.data.bio);
			localStorage.setItem("username", response.data.username);
			localStorage.setItem("userId", response.data.id);
			navigate(`/${page}`);
		} catch (error) {
			localStorage.removeItem("token");
			localStorage.removeItem("userId");
			navigate("/");
		}
	} else {
		navigate("/");
	}
}
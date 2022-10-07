import styled from "styled-components";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { useState, useContext } from "react";
import { loginUser } from "../services/auth";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { checkToken } from "../utils/validateToken";

export default function LoginForm() {
	const { setToken } = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	async function login(e) {
		e.preventDefault();
		setLoading(true);

		const userData = { username, password };

		const response =  await loginUser(userData);

		if (response) {
			setToken(response.token);
			localStorage.setItem("token", response.token);
			localStorage.setItem("userId", response.userId);
			const page = "feed";
			checkToken(navigate, setToken, page);
			navigate("/feed");
		} else {
			setLoading(false);
		}
	}

	return (
		<Form onSubmit={login}>
			<Input type="text" placeholder="username" disabled={loading} value={username} onChange={(e) => setUsername(e.target.value)} />
			<Input type="password" placeholder="password" disabled={loading} value={password} onChange={(e) => setPassword(e.target.value)} />
			<Button type="submit" disabled={loading} name={"Login"} />
		</Form>
	);
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
    @media (max-width: 611px) {
        width: 100%;
    }
`;
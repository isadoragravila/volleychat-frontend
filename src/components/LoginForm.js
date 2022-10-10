import styled from "styled-components";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { useState, useContext } from "react";
import { loginUser } from "../services/auth";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { checkToken } from "../utils/validateToken";
import Swal from "sweetalert2";

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

		try {
			const response =  await loginUser(userData);
			setToken(response.data.token);
			localStorage.setItem("token", response.data.token);
			localStorage.setItem("userId", response.data.userId);
			const page = "feed";
			checkToken(navigate, setToken, page);
			navigate("/feed");
		} catch (error) {
			Swal.fire({
				title: "Oops...",
				text: error.response.data,
				icon: "error",
				confirmButtonColor: "#142B73"
			});
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
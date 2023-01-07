import styled from "styled-components";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { useState, useContext } from "react";
import { loginUser } from "../services/auth";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function LoginForm() {
	const { setUserData } = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	async function login(e) {
		e.preventDefault();
		setLoading(true);

		const loginData = { username, password };

		try {
			const response =  await loginUser(loginData);
			setUserData(response.data);
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
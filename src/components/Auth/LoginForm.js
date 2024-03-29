import Button from "../Form/Button";
import Input from "../Form/Input";
import { useState, useContext } from "react";
import { loginUser } from "../../services/auth";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import FormContainer from "../Form/FormContainer";
import { alertPopUp } from "../../utils/alertPopUp";

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
			alertPopUp(error.response.data);
			setLoading(false);
		}
	}

	return (
		<FormContainer onSubmit={login}>
			<Input type="text" placeholder="username" disabled={loading} value={username} onChange={(e) => setUsername(e.target.value)} />
			<Input type="password" placeholder="password" disabled={loading} value={password} onChange={(e) => setPassword(e.target.value)} />
			<Button type="submit" disabled={loading} name={"Login"} />
		</FormContainer>
	);
}
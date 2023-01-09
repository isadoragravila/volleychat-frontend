import { useNavigate } from "react-router-dom";
import Logo from "../shared/Logo";
import RegisterForm from "../components/RegisterForm";
import { useEffect } from "react";
import useToken from "../hooks/useToken";
import Link from "../shared/Link";
import AuthContainer from "../shared/AuthContainer";

export default function Register() {
	const navigate = useNavigate();
	const token = useToken();

	useEffect(() => {
		if (token) {
			navigate("/feed");
		}
	}, []);

	return (
		<AuthContainer>
			<Logo />
			<RegisterForm />
			<Link to="/" data-cy="goToLogin">
        Already have an account? Switch back to login!
			</Link>
		</AuthContainer>
	);
}
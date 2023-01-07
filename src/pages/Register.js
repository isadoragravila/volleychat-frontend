import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../shared/Logo";
import RegisterForm from "../components/RegisterForm";
import { useEffect } from "react";
import useToken from "../hooks/useToken";

export default function Register() {
	const navigate = useNavigate();
	const token = useToken();

	useEffect(() => {
		if (token) {
			navigate("/feed");
		}
	}, []);

	return (
		<Container>
			<Logo />
			<RegisterForm />
			<Link to="/" data-cy="goToLogin">
				<Login>
                    Already have an account? Switch back to login!
				</Login>
			</Link>
		</Container>
	);
}

const Container = styled.div`
    background-color: #142B73;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    align-items: center;
    min-height: 100vh;
`;

const Login = styled.p`
    color: #f2f2f2;
    font-size: 16px;
    text-decoration-line: underline;
    font-family: 'Poppins';
    margin-top: 40px;
    margin-bottom: 20px;
    @media (max-width: 611px) {
        font-size: 14px;
    }
`;
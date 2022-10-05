import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../shared/Logo";
import RegisterForm from "../components/RegisterForm";
import { useEffect, useContext } from "react";
import UserContext from "../context/UserContext";
import { checkToken } from "../utils/validateToken";

export default function Register() {
	const navigate = useNavigate();
	const { setToken } = useContext(UserContext);
	const tokenStorage = localStorage.getItem("token");

	useEffect(() => {
		if (tokenStorage) {
			const page = "feed";
			checkToken(navigate, setToken, page);
		}
	}, []);

	return (
		<Container>
			<Logo />
			<RegisterForm />
			<Link to="/">
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
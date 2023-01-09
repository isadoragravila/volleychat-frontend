import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Logo from "../shared/Logo";
import LoginForm from "../components/LoginForm";
import useToken from "../hooks/useToken";
import { useEffect } from "react";
import Link from "../shared/Link";
import AuthContainer from "../shared/AuthContainer";
import LoadingPage from "../components/LoadingPage";

export default function Login() {
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
			<Subtitle>
				<p>
          Uniting people with the same love for volleyball. Create chatrooms and make new friends.
				</p>
			</Subtitle>
			{token ? <LoadingPage /> : <LoginForm />}
			<Link to="/sign-up" data-cy="goToRegister">
        First time? Create an account!
			</Link>
		</AuthContainer>
	);
}

const Subtitle = styled.div`
  width: 600px;
  padding-bottom: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    width: 90%;
    text-align: center;
    font-weight: 700;
    font-size: 37px;
    font-family: 'Poppins';
    color: #F2C230;
  }
  @media (max-width: 611px) {
    width: 100%;
    p {
      font-size: 30px;
    }
  }
`;
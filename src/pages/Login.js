import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../shared/Logo";
import LoginForm from "../components/LoginForm";
import { checkToken } from "../utils/validateToken";
import { useEffect, useContext } from "react";
import UserContext from "../context/UserContext";

export default function Login() {
    const navigate = useNavigate();
    const { setToken } = useContext(UserContext);
    
    useEffect(() => {
        const page = "feed";
        checkToken(navigate, setToken, page);
    }, []);

    return (
        <Container>
            <Logo />
            <Subtitle>
                <p>
                    Uniting people with the same love for volleyball. Create chatrooms and make new friends.
                </p>
            </Subtitle>
            <LoginForm />
            <Link to="/sign-up">
                <Register>
                    First time? Create an account!
                </Register>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    background-color: #142B73;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    align-items: center;
    min-height: 100vh;
`;

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
`

const Register = styled.p`
    color: #f2f2f2;
    font-size: 16px;
    text-decoration-line: underline;
    font-family: 'Poppins';
    margin-top: 40px;
    margin-bottom: 20px;
`
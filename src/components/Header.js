import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { FaVolleyballBall } from "react-icons/fa";

export default function Header() {
	const { setUserData, userData: user } = useContext(UserContext);
	const navigate = useNavigate();

	function logout() {
		setUserData({});
		localStorage.removeItem("userData");
		navigate("/");
	}
	return (
		<Conteiner>
			<Logo data-cy="logo" onClick={() => navigate("/feed")}>
				<Volleyball />
				<Title>
					<p>Volley</p>
					<p>Chat</p>
				</Title>
			</Logo>
			<Menu>
				<p data-cy="logout" onClick={logout}>Logout</p>
				<img data-cy="image" src={user.image} alt="user" onClick={() => navigate(`/profile/${user.userId}`)} />
			</Menu>
		</Conteiner>
	);
}

const Conteiner = styled.div`
  height: 72px;
  width: 100%;
  background-color: #142b73;
  position: fixed;
  top: 0;
  z-index: 1;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  @media (max-width: 611px) {
    padding: 0 20px;
    }
`;

const Logo = styled.div`
    display: flex;
    font-family: "Poppins";
    font-weight: 700;
    font-size: 40px;
    color: #f2c230;
    align-items: center;
    cursor: pointer;
        
    @media (max-width: 611px) {
        font-size: 20px;
        line-height: 22px;
    }
`;
const Title = styled.div`
    display: flex;
    @media (max-width: 611px) {
        flex-direction: column;
        align-items: center;
    }

`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    p {
        font-family: "Poppins";
        font-weight: 700;
        font-size: 15px;
        color: #f2c230;
        margin-right: 30px;
        cursor: pointer;
    }

    img {
        width: 45px;
        height: 45px;
        object-fit: cover;
        border-radius: 22.5px;
        cursor: pointer;
    }
    @media (max-width: 611px) {
        p {
            font-size: 13px;
            margin-right: 15px;
        }
    }
`;

const Volleyball = styled(FaVolleyballBall)`
    width: 40px;
    height: 40px;
    color: #F2C230;
    margin-right: 10px;
`;
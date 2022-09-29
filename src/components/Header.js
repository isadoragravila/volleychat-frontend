import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const { setToken } = useContext(UserContext);
    const navigate = useNavigate();
    const imageProfile = localStorage.getItem("image");

    function logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("image");
        setToken("");
        navigate("/");
    }
    return(
        <Conteiner>
            <Logo>VolleyChat</Logo>
            <Menu>
                <p>Edit profile</p>
                <p onClick={logout}>Logout</p>
                <img src={imageProfile} alt="user" />
            </Menu>
        </Conteiner>
    )
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
`;

const Logo = styled.div`
    font-family: "Poppins";
    font-weight: 700;
    font-size: 40px;
    color: #f2c230;
`

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
    }
`
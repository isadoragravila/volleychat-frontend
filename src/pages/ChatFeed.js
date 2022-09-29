import styled from "styled-components";
import Header from "../components/Header";
import CategoryMenu from "../components/CategoryMenu";
import ChatMenu from "../components/ChatMenu";
import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
import { checkToken } from "../utils/validateToken";

export default function ChatFeed() {
    const navigate = useNavigate();
    const { token, setToken } = useContext(UserContext);
    const { categoryId } = useParams();
    
    useEffect(() => {
        if(!token) {
            const page = (`feed/${categoryId}`);
            checkToken(navigate, setToken, page);
        }
    }, []);

    return (
        <Conteiner>
            <Header />
            <Content>
                <LeftSide>
                    <h3>Choose your chat category</h3>
                    <h6 onClick={() => navigate("/feed")}>Return to timeline</h6>
                    <CategoryMenu />
                </LeftSide>
                <RightSide>
                    <ChatMenu />
                </RightSide>
            </Content>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    background-color: #f2f2f2;
    min-height: 100vh;
`;

const Content = styled.div`
    display: flex;
    padding-top: 130px;
    align-items: flex-start;
    justify-content: center;
`;

const LeftSide = styled.div`
    background-color: rgba(20, 43, 115, 0.3);
    width: 275px;
    margin-right: 28px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        font-family: "Poppins";
        font-weight: 600;
        line-height: 28px;
        font-size: 20px;
        color: #142b73;
        text-align: center;
        margin-bottom: 17px;
    }
    h6 {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 14px;
        color: #142b73;
        text-align: center;
        margin-bottom: 17px;
        cursor: pointer;
        text-decoration: underline;
    }
`;

const RightSide = styled.div`
    width: 480px;
`;
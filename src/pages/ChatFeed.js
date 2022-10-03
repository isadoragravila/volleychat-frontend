import styled from "styled-components";
import Header from "../components/Header";
import ChatMenu from "../components/ChatMenu";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
import { checkToken } from "../utils/validateToken";
import { getCategories } from "../services/categories";
import MenuButton from "../components/MenuButton";
import { getChatrooms } from "../services/chats";
import useInterval from "use-interval";

export default function ChatFeed() {
    const navigate = useNavigate();
    const { token, setToken } = useContext(UserContext);
    const { categoryId } = useParams();
    const [categories, setCategories] = useState([]);
    const [chats, setChats] = useState([]);
    const [categoryName, setCategoryName] = useState('');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    async function fetchCategories() {
        const response = await getCategories(config);
        setCategories(response);
    }
    
    async function fetchChatrooms() {
        const response = await getChatrooms(config, categoryId);
        setCategoryName(response.name);
        setChats(response.chatrooms);
    }

    useEffect(() => {
        if(!token) {
            const page = (`feed/${categoryId}`);
            checkToken(navigate, setToken, page);
            return
        }
        fetchCategories();
        fetchChatrooms();

    }, [token, categoryId]);

    useInterval(() => {
        fetchChatrooms();
    }, 5000);

    return (
        <Conteiner>
            <Header />
            <Content>
                <LeftSide>
                    <h3>Choose your chat category</h3>
                    <h6 onClick={() => navigate("/feed")}>Return to timeline</h6>
                    {categories.map(item => <MenuButton key={item.id} id={item.id} name={item.name} />)}
                </LeftSide>
                <RightSide>
                    <ChatMenu categoryId={categoryId} chats={chats} setChats={setChats} category={categoryName} />
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
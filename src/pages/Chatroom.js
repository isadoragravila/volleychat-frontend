import styled from "styled-components";
import Header from "../components/Header";
import Participant from "../components/Participant";
import WriteMessage from "../components/WriteMessage";
import Message from "../components/Message";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getParticipants, removeParticipant } from "../services/participants";
import UserContext from "../context/UserContext";
import { getChatroomName } from "../services/chats";

export default function Chatroom() {
    const { token } = useContext(UserContext);
    const { categoryId, chatId } = useParams();
    const navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [chatName, setChatName] = useState('');

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const messages = [
        {
            name: "isadoragravila",
            content: "uihaisuhduaisf iudsahduiaha",
            justify: true
        },
        {
            name: "bobesponja",
            content: "uihaisuhduaisf iudsahduiaha",
            justify: false
        },
        {
            name: "isadoragravila",
            content: "uihaisuhduaisf iudsahduiaha",
            justify: true
        },
        {
            name: "bobesponja",
            content: "uihaisuhduaisf iudsahduiaha",
            justify: false
        },
        {
            name: "isadoragravila",
            content: "uihaisuhduaisf iudsahduiaha",
            justify: true
        },
        {
            name: "isadoragravila",
            content: "uihaisuhduaisf iudsahduiaha",
            justify: true
        }
    ]

    useEffect(() => {
        if (!token) {
            navigate(`/feed/${categoryId}`);
            return
        }

        async function fetchParticipants() {
            const response = await getParticipants(config, chatId);
            setUsers(response);

            const chatname = await getChatroomName(config, chatId);
            setChatName(chatname.name);
        }

        fetchParticipants();
    }, []);

    async function getOutOfChat() {
        const response = await removeParticipant(config, chatId);
        if (response === 200) {
            navigate(`/feed/${categoryId}`);
        }
    }

    return (
        <Conteiner>
            <Header />
            <Content>
                <LeftSide>
                    <h2>{chatName}</h2>
                    <h3>Participants</h3>
                    {users.map(item => <Participant key={item.id} name={item.name} id={item.id} />)}
                    <h5 onClick={getOutOfChat}>Leave chatroom</h5>
                </LeftSide>
                <RightSide>
                    <MessageBoard>
                        {messages.map(item => <Message name={item.name} content={item.content} justified={item.justify} />)}
                        <Margin></Margin>
                    </MessageBoard>
                    <WriteMessage />
                </RightSide>
            </Content>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    background-color: #f2f2f2;
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const LeftSide = styled.div`
    background-color: #e2e2e2;
    width: 275px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 102px 25px 30px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    position: relative;
    h2 {
        font-family: "Poppins";
        font-weight: 700;
        line-height: 28px;
        font-size: 22px;
        color: #142b73;
        text-align: center;
        margin-bottom: 20px;
    }
    h3 {
        font-family: "Poppins";
        font-weight: 600;
        line-height: 28px;
        font-size: 20px;
        color: #142b73;
        text-align: center;
        margin-bottom: 20px;
    }
    h5 {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 14px;
        color: #142b73;
        text-align: center;
        margin-bottom: 17px;
        cursor: pointer;
        text-decoration: underline;
        position: absolute;
        bottom: 20px;
    }
    h6 {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 18px;
        color: #000000;
        text-align: center;
        cursor: pointer;
    }
`;

const RightSide = styled.div`
    background-color: rgba(226, 226, 226, 0.3);
    width: 508px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    height: 100vh;
`;

const MessageBoard = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column-reverse;
    padding-bottom: 70px;
    overflow-y: auto;

::-webkit-scrollbar {
  background: none;
  width: 4px;
}
`;

const Margin = styled.div`
    min-height: 72px;
    width: 100%;
`;
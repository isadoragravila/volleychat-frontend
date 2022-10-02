import styled from "styled-components";
import { RiSendPlaneFill } from "react-icons/ri";
import { useState, useContext } from "react";
import Button from "../shared/Button";
import { IoClose } from "react-icons/io5";
import { createChat } from "../services/chats";
import UserContext from "../context/UserContext";
import { getChatrooms } from "../services/chats";
import { useNavigate } from "react-router-dom";
import { insertParticipants } from "../services/participants";
import { createMessage } from "../services/messages";

export default function WriteMessage({ chatId }) {
    const { token } = useContext(UserContext);
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    async function sendMessage(e) {
        e.preventDefault();
        const body = { content };
        setLoading(true);

        const response = await createMessage(body, config, chatId);

        if(response && response.status === 201) {
            setContent("");
            setLoading(false);
            //fetchMessages(config, chatId)
        } else {
            setLoading(false);
        }
    }

    return (
        <Conteiner onSubmit={sendMessage}>
            <Input
                type="text"
                placeholder="Write your message..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                
            />
            <button type="submit"><Send /></button>
        </Conteiner>
    )
}

const Conteiner = styled.form`
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    padding: 10px 15px;
    button {
        display: flex;
        border: none;
        align-items: center;
        justify-content: center;
    }
`;

const Send = styled(RiSendPlaneFill)`
    width: 25px;
    height: 25px;
    color: #000000;
    cursor: pointer;
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 18px;
    border: none;
    outline: none;
    text-indent: 10px;
    color: #000000;
`;
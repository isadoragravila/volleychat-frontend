/* eslint-disable no-unused-vars */
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function PostCard({ userId, username, chatroomId, chatroom, type, fromNow }) {
	const navigate = useNavigate();

	async function goToChatroom() {
		//falta
	}

	return (
		<Conteiner>
			<Message>
				<Name>{username}</Name> {type} the chatroom <Clickable>{chatroom}</Clickable>, enter now and send a message!
			</Message>
			<Time><p>{fromNow}</p></Time>
		</Conteiner>
	);
}

const Conteiner = styled.div`
    background-color: rgba(242, 194, 48, 0.3);
    width: 100%;
    min-height: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin-bottom: 15px;
`;

const Message = styled.span`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    text-align: center;
    @media (max-width: 611px) {
        font-size: 14px;
        line-height: 18px;
    }
`;
const Clickable = styled.span`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #142b73;
    cursor: pointer;
    text-decoration: underline;
        @media (max-width: 611px) {
        font-size: 14px;
        line-height: 16px;
    }
`;

const Name = styled.span`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    color: #142b73;
        @media (max-width: 611px) {
        font-size: 14px;
        line-height: 16px;
    }
`;

const Time = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: 5px;
    p {
        font-family: 'Poppins';
        font-weight: 400;
        font-size: 14px;
        display: flex;
        text-align: center;
        color: #6A6A6A;
    }
    @media (max-width: 611px) {
        p {
            font-size: 12px;
        }
    }
`;
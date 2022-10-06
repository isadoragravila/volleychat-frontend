import styled from "styled-components";
import { useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { insertParticipants } from "../services/participants";
// import UserContext from "../context/UserContext";

export default function PostCard({ id, username, chatroom, type }) {
	// const { token } = useContext(UserContext);
	// const navigate = useNavigate();
	// const config = {
	// 	headers: {
	// 		Authorization: `Bearer ${token}`,
	// 	},
	// };
	// async function enterChatroom() {
	// 	const response = await insertParticipants(config, chatId);
	// 	if (response === 201) {
	// 		navigate(`/feed/${categoryId}/chat/${chatId}`);
	// 	}
	// }

	const navigate = useNavigate();
	function goToProfile() {
		navigate(`/profile/${id}`);
	}

	return (
		<Conteiner>
			<Message>
				<Clickable onClick={goToProfile}>{username}</Clickable> {type} the chatroom <Clickable>{chatroom}</Clickable>, enter and send a message
			</Message>

		</Conteiner>
	);
}

const Conteiner = styled.div`
    background-color: rgba(242, 194, 48, 0.3);
    width: 100%;
    min-height: 50px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-between;
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

import styled from "styled-components";
import Header from "../components/Header";
import Participant from "../components/Participant";
import WriteMessage from "../components/WriteMessage";
import Message from "../components/Message";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { getParticipants, removeParticipant, updateStatus } from "../services/participants";
import UserContext from "../context/UserContext";
import useInterval from "use-interval";
import { getMessages } from "../services/messages";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function Chatroom() {
	const { token } = useContext(UserContext);
	const { categoryId, chatId } = useParams();
	const navigate = useNavigate();
	const [users, setUsers] = useState([]);
	const [chatName, setChatName] = useState("");
	const [messages, setMessages] = useState([]);
	const [userId, setUserId] = useState(0);
	const [openParticipants, setOpenParticipants] = useState(false);

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	useEffect(() => {
		if (!token) {
			navigate(`/feed/${categoryId}`);
			return;
		}

		fetchMessages();
		fetchParticipants();
	}, []);


	async function fetchParticipants() {
		const response = await getParticipants(config, chatId);
		setUsers(response);
	}

	async function fetchMessages() {
		const response = await getMessages(config, chatId);
		setChatName(response.title);
		setMessages(response.messages);
		setUserId(response.userId);
	}

	async function sendStatus() {
		await updateStatus(config, chatId);
	}

	useInterval(() => {
		fetchMessages();
		fetchParticipants();
		sendStatus();
	}, 3000);

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
					<h2 data-cy="chatTitle">{chatName}</h2>
					<h3>Participants</h3>
					<Downside data-cy="participants">
						{users.map(item => <Participant key={item.id} name={item.name} id={item.id} />)}
					</Downside>
					<h5 data-cy="leaveRoom" onClick={getOutOfChat}>Leave chatroom</h5>
				</LeftSide>
				<MenuMobile>
					<Upside>
						<h3 onClick={() => setOpenParticipants(!openParticipants)}>
                            Participants
							{openParticipants ? <ArrowUp /> : <ArrowDown />}
						</h3>
						<h2>{chatName}</h2>
						<Close onClick={getOutOfChat} />
					</Upside>
					<Downside>
						{openParticipants ? (
							users.map(item => <Participant key={item.id} name={item.name} id={item.id} />)
						) : (
							null
						)}
					</Downside>
				</MenuMobile>
				<RightSide>
					<MessageBoard>
						{messages.map(item => <Message key={item.id} name={item.user.username} content={item.content} writerId={item.userId} userId={userId} />)}
						<Margin></Margin>
					</MessageBoard>
					<WriteMessage chatId={chatId} fetchMessages={fetchMessages} />
				</RightSide>
			</Content>
		</Conteiner>
	);
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

const MenuMobile = styled.div`
    width: 100%;
    min-height: 42px;
    background-color: #e2e2e2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: absolute;
    top: 72px;
    z-index: 1;
    display: none;
    padding: 10px 15px;
    font-family: "Poppins";
    h2 {
        font-weight: 700;
        line-height: 22px;
        font-size: 18px;
        color: #142b73;
        text-align: center;
        max-width: 180px;
    }
    h3 {
        font-weight: 600;
        line-height: 20px;
        font-size: 16px;
        color: #142b73;
        text-align: center;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    h6 {
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        text-align: center;
        cursor: pointer;
    }

    @media (max-width: 611px) {
        display: flex;
        flex-direction: column;
    }
`;

const Upside = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
`;
const Downside = styled.div`
    width: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        background: none;
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
    background: #c3c3c3; 
    border-radius: 10px;
    }
    @media (max-width: 611px) {
        max-height: 25vh;
    }
    
`;

const LeftSide = styled.div`
    background-color: #e2e2e2;
    width: 275px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 102px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    position: relative;
    font-family: "Poppins";
    h2 {
        font-weight: 700;
        line-height: 28px;
        font-size: 22px;
        color: #142b73;
        text-align: center;
        margin-bottom: 20px;
    }
    h3 {
        font-weight: 600;
        line-height: 28px;
        font-size: 20px;
        color: #142b73;
        text-align: center;
        margin-bottom: 20px;
    }
    h5 {
        font-weight: 400;
        font-size: 14px;
        color: #142b73;
        text-align: center;
        background-color: #e2e2e2;
        padding-bottom: 37px;
        padding-top: 10px;
        width: 100%;
        cursor: pointer;
        text-decoration: underline;
        position: absolute;
        bottom: 0;
    }
    h6 {
        font-weight: 400;
        font-size: 18px;
        color: #000000;
        text-align: center;
        cursor: pointer;
    }
    @media (max-width: 611px) {
        display: none;
    }
`;

const RightSide = styled.div`
    background-color: rgba(226, 226, 226, 0.3);
    width: 508px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    height: 100vh;
    @media (max-width: 611px) {
        width: 100%;
    }
`;

const MessageBoard = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column-reverse;
    padding-bottom: 70px;
    overflow-y: auto;

    ::-webkit-scrollbar {
        background: none;
        width: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background: #c3c3c3; 
        border-radius: 10px;
    }
    @media (max-width: 611px) {
        padding-bottom: 60px;
    }
`;

const Margin = styled.div`
    min-height: 72px;
    width: 100%;
`;

const ArrowDown = styled(RiArrowDownSLine)`
  width: 20px;
  height: 20px;
  color: #142b73;
`;

const ArrowUp = styled(RiArrowUpSLine)`
  width: 20px;
  height: 20px;
  color: #142b73;
`;

const Close = styled(IoClose)`
  width: 20px;
  height: 20px;
  color: #142b73;
  cursor: pointer;
`;
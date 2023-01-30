import WriteMessage from "../components/WriteMessage";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getParticipants, removeParticipant, updateStatus } from "../services/participants";
import useInterval from "use-interval";
import { getMessages } from "../services/messages";
import Swal from "sweetalert2";
import useToken from "../hooks/useToken";
import ChatroomContainer from "../components/Chatroom/ChatroomContainer";
import ParticipantMenu from "../components/Chatroom/ParticipantMenu";
import ParticipantMenuMobile from "../components/Chatroom/ParticipantMenuMobile";
import MessageBoardContainer from "../components/Chatroom/MessageBoardContainer";

export default function Chatroom() {
	const token = useToken();
	const { categoryId, chatId } = useParams();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
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
		try {
			const response = await getParticipants(config, chatId);
			setUsers(response.data);
		} catch (error) {
			Swal.fire({
				title: "Oops...",
				text: error.response.data,
				icon: "error",
				confirmButtonColor: "#142B73"
			});
		}
	}

	async function fetchMessages() {
		try {
			const response = await getMessages(config, chatId);
			setChatName(response.data.title);
			setMessages(response.data.messages);
			setUserId(response.data.userId);
		} catch (error) {
			Swal.fire({
				title: "Oops...",
				text: error.response.data,
				icon: "error",
				confirmButtonColor: "#142B73"
			});
		}

	}

	async function sendStatus() {
		try {
			await updateStatus(config, chatId);
		} catch (error) {
			Swal.fire({
				title: "Oops...",
				text: error.response.data,
				icon: "error",
				confirmButtonColor: "#142B73"
			});
			navigate(`/feed/${categoryId}`);
		}
	}

	useInterval(() => {
		sendStatus();
		fetchMessages();
		fetchParticipants();
	}, 3000);

	async function getOutOfChat() {
		if (!loading) {
			setLoading(true);
			try {
				await removeParticipant(config, chatId);
				navigate(`/feed/${categoryId}`);
				setLoading(false);
			} catch (error) {
				Swal.fire({
					title: "Oops...",
					text: error.response.data,
					icon: "error",
					confirmButtonColor: "#142B73"
				});
				navigate("/feed");
				setLoading(false);
			}
		}
	}

	return (
		<ChatroomContainer>
			<ParticipantMenu chatName={chatName} users={users} getOutOfChat={getOutOfChat} />
			<ParticipantMenuMobile chatName={chatName} users={users} openParticipants={openParticipants} setOpenParticipants={setOpenParticipants} getOutOfChat={getOutOfChat} />
			<MessageBoardContainer messages={messages} userId={userId}>
				<WriteMessage chatId={chatId} fetchMessages={fetchMessages} />
			</MessageBoardContainer>
		</ChatroomContainer>
	);
}
import ChatMenu from "../components/Feed/ChatMenu";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../services/categories";
import { getChatrooms } from "../services/chats";
import useInterval from "use-interval";
import Swal from "sweetalert2";
import useToken from "../hooks/useToken";
import CategoryMenu from "../components/Feed/CategoryMenu";
import FeedContainer from "../components/Feed/FeedContainer";
import FeedWrapper from "../components/Feed/FeedWrapper";

export default function ChatFeed() {
	const navigate = useNavigate();
	const { categoryId } = useParams();
	const [categories, setCategories] = useState([]);
	const [chats, setChats] = useState([]);
	const [categoryName, setCategoryName] = useState("");
	const token = useToken();

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	async function fetchCategories() {
		try {
			const response = await getCategories(config);
			setCategories(response.data);
		} catch (error) {
			Swal.fire({
				title: "Oops...",
				text: error.response.data,
				icon: "error",
				confirmButtonColor: "#142B73"
			});
		}
	}

	async function fetchChatrooms() {
		try {
			const response = await getChatrooms(config, categoryId);
			setCategoryName(response.data.name);
			setChats(response.data.chatrooms);
		} catch (error) {
			Swal.fire({
				title: "Oops...",
				text: error.response.data,
				icon: "error",
				confirmButtonColor: "#142B73"
			});
		}
	}

	useEffect(() => {
		if (!token) {
			navigate("/");
			return;
		}
		fetchCategories();
		fetchChatrooms();

	}, [token, categoryId]);

	useInterval(() => {
		fetchChatrooms();
	}, 5000);

	return (
		<FeedContainer>
			<CategoryMenu categories={categories}>
				<h6 data-cy="return" onClick={() => navigate("/feed")}>Return to timeline</h6>
			</CategoryMenu>
			<FeedWrapper>
				<ChatMenu categoryId={categoryId} chats={chats} setChats={setChats} category={categoryName} />
			</FeedWrapper>
		</FeedContainer>
	);
}
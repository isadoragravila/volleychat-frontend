import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../services/categories";
import { getProfileById } from "../services/participants";
import { getChatsByCreator } from "../services/chats";
import FeedMenu from "../components/Feed/FeedMenu";
import useInterval from "use-interval";
import Swal from "sweetalert2";
import useToken from "../hooks/useToken";
import CategoryMenu from "../components/Feed/CategoryMenu";
import FeedContainer from "../components/Feed/FeedContainer";
import FeedWrapper from "../components/Feed/FeedWrapper";
import ProfilePageBox from "../components/Feed/ProfilePageBox";

export default function ProfilePage() {
	const navigate = useNavigate();
	const { id } = useParams();
	const [categories, setCategories] = useState([]);
	const [profile, setProfile] = useState({});
	const [chats, setChats] = useState([]);
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

	async function getProfile() {
		try {
			const response = await getProfileById(config, id);
			setProfile(response.data);
		} catch (error) {
			Swal.fire({
				title: "Oops...",
				text: error.response.data,
				icon: "error",
				confirmButtonColor: "#142B73"
			});
		}
	}

	async function fetchChatsByCreator() {
		try {
			const response = await getChatsByCreator(config, id);
			setChats(response.data);
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
		getProfile();
		fetchChatsByCreator();
	}, [token, id]);

	useInterval(() => {
		fetchChatsByCreator();
	}, 5000);

	return (
		<FeedContainer>
			<CategoryMenu categories={categories}>
				<h6 data-cy="return" onClick={() => navigate("/feed")}>Return to timeline</h6>
			</CategoryMenu>
			<FeedWrapper>
				<ProfilePageBox profile={profile} />
				<FeedMenu chats={chats} />
			</FeedWrapper>
		</FeedContainer>
	);
}
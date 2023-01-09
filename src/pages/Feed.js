import styled from "styled-components";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { getCategories } from "../services/categories";
import ProfileBox from "../components/ProfileBox";
import { getChatsByCreator } from "../services/chats";
import FeedMenu from "../components/FeedMenu";
import Swal from "sweetalert2";
import useToken from "../hooks/useToken";
import CategoryMenu from "../components/CategoryMenu";
import FeedContainer from "../shared/FeedContainer";
import FeedWrapper from "../components/FeedWrapper";

export default function Feed() {
	const navigate = useNavigate();
	const { userData: user } = useContext(UserContext);
	const [categories, setCategories] = useState([]);
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

	async function fetchChatsByCreator() {
		try {
			const response = await getChatsByCreator(config, user.userId);
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
		fetchChatsByCreator();
	}, [token]);

	return (
		<FeedContainer>
			<ProfileMobile>
				<ProfileBox />
			</ProfileMobile>
			<CategoryMenu categories={categories} />
			<FeedWrapper>
				<Profile>
					<ProfileBox />
				</Profile>
				<FeedMenu chats={chats} title={"Your chats"} />
			</FeedWrapper>
		</FeedContainer>
	);
}

const Profile = styled.div`
  display: flex;
  width: 100%;

  @media (max-width: 611px) {
    display: none;
  }
`;

const ProfileMobile = styled.div`
  display: none;
  width: 100%;
  @media (max-width: 611px) {
    display: flex;
  }
`;
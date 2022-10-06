/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { checkToken } from "../utils/validateToken";
import { getCategories } from "../services/categories";
import MenuButton from "../components/MenuButton";
import ProfileBox from "../components/ProfileBox";
import { getPosts } from "../services/posts";

export default function Feed() {
	const navigate = useNavigate();
	const { token, setToken } = useContext(UserContext);
	const [categories, setCategories] = useState([]);
	const [posts, setPosts] = useState([]);
	const userId = localStorage.getItem("userId");

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	async function fetchCategories() {
		const response = await getCategories(config);
		setCategories(response);
	}

	async function fetchPosts() {
		const response = await getPosts(config, userId);
		setPosts(response.data);
	}

	useEffect(() => {
		if (!token) {
			const page = "feed";
			checkToken(navigate, setToken, page);
			return;
		}

		fetchCategories();
		if (userId) {
			fetchPosts();
		}
	}, [token]);

	return (
		<Conteiner>
			<Header />
			<Content>
				<ProfileMobile>
					<ProfileBox />
				</ProfileMobile>
				<LeftSide>
					<UpSide>
						<h3>Choose your chat category</h3>
					</UpSide>
					<DownSide>
						{categories.map(item => <MenuButton key={item.id} id={item.id} name={item.name} />)}
					</DownSide>
				</LeftSide>
				<RightSide>
					<Profile>
						<ProfileBox />
					</Profile>
					<Timeline posts={posts}/>
				</RightSide>
			</Content>
		</Conteiner>
	);
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

    @media (max-width: 611px) {
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding-top: 100px;
    }
`;

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
        margin-bottom: 48px;
    }
    @media (max-width: 611px) {
        width: 100%;
        margin-right: 0;
        padding: 10px 30px;
        h3 {
            font-size: 16px;
            margin-bottom: 20px;
        }
    }
`;

const UpSide = styled.div`
    @media (max-width: 611px) {
        display: flex;
    }
`;

const DownSide = styled.div`
    @media (max-width: 611px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

const RightSide = styled.div`
    width: 480px;
    @media (max-width: 611px) {
        width: 100%;
        margin-top: 20px;
    }
`;
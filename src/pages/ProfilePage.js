import styled from "styled-components";
import Header from "../components/Header";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../context/UserContext";
import { checkToken } from "../utils/validateToken";
import { getCategories } from "../services/categories";
import MenuButton from "../components/MenuButton";
import { getProfileById } from "../services/participants";
import { getChatsByCreator } from "../services/chats";
import FeedMenu from "../components/FeedMenu";
import useInterval from "use-interval";

export default function ProfilePage() {
	const navigate = useNavigate();
	const { id } = useParams();
	const { token, setToken } = useContext(UserContext);
	const [categories, setCategories] = useState([]);
	const [profile, setProfile] = useState({});
	const [chats, setChats] = useState([]);
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
			alert(error.response.data);
		}
	}

	async function getProfile() {
		try {
			const response = await getProfileById(config, id);
			setProfile(response.data);
		} catch (error) {
			alert(error.response.data);
		}
	}

	async function fetchChatsByCreator() {
		try {
			const response = await getChatsByCreator(config, id);
			setChats(response.data);
		} catch (error) {
			alert(error.response.data);
		}
	}

	useEffect(() => {
		if (!token) {
			const page = `profile/${id}`;
			checkToken(navigate, setToken, page);
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
		<Conteiner>
			<Header />
			<Content>
				<LeftSide>
					<UpSide>
						<h3>Choose your chat category</h3>
						<h6 data-cy="return" onClick={() => navigate("/feed")}>Return to timeline</h6>
					</UpSide>
					<DownSide>
						{categories.map(item => <MenuButton key={item.id} id={item.id} name={item.name} />)}
					</DownSide>
				</LeftSide>
				<RightSide>
					<Profile>
						<Title>
							<Name data-cy="username">{`${profile.username}' chats`}</Name>
							<Bio>{profile.bio}</Bio>
						</Title>
						<img src={profile.image} alt="user" />
					</Profile>
					<FeedMenu chats={chats} />
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
    justify-content: space-between;
    //align-items: center;
    img {
        width: 75px;
        height: 75px;
        object-fit: cover;
        border-radius: 37.5px;
    }
    @media (max-width: 611px) {
        img {
        width: 60px;
        height: 60px;
        margin-right: 10px;
    }
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
        margin-bottom: 17px;
    }
    h6 {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 14px;
        color: #142b73;
        text-align: center;
        margin-bottom: 17px;
        cursor: pointer;
        text-decoration: underline;
    }
    @media (max-width: 611px) {
        width: 100%;
        margin-right: 0;
        padding: 10px 30px;
        h3 {
            font-size: 16px;
            margin-bottom: 20px;
            line-height: 20px;
        }
        h6 {
            font-size: 12px;
            line-height: 14px;
        }
    }

    @media (max-width: 450px) {
        h3 {
            max-width: 180px;
        }
        h6 {
            max-width: 90px;
        }
    }
`;

const UpSide = styled.div`
    width: 100%;
    @media (max-width: 611px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
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

const Title = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
`;

const Name = styled.div`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 25px;
    color: #142B73;
    @media (max-width: 611px) {
        font-size: 20px;
        margin-left: 10px;
    }
`;

const Bio = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-top: 20px;
    margin-bottom: 16px;
    @media (max-width: 611px) {
        font-size: 14px;
        line-height: 16px;
        margin-left: 10px;
    }

`;
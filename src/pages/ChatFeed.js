import styled from "styled-components";
import Header from "../components/Header";
import ChatMenu from "../components/ChatMenu";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories } from "../services/categories";
import MenuButton from "../components/MenuButton";
import { getChatrooms } from "../services/chats";
import useInterval from "use-interval";
import Swal from "sweetalert2";
import useToken from "../hooks/useToken";

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
					<ChatMenu categoryId={categoryId} chats={chats} setChats={setChats} category={categoryName} />
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
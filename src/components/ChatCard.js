import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { insertParticipants } from "../services/participants";
import UserContext from "../context/UserContext";
import Swal from "sweetalert2";

export default function ChatCard({ chatId, title, description, time, categoryId }) {
	const { token } = useContext(UserContext);
	const navigate = useNavigate();
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	async function enterChatroom() {
		try {
			await insertParticipants(config, chatId);
			navigate(`/feed/${categoryId}/chat/${chatId}`);
		} catch (error) {
			Swal.fire({
				title: "Oops...",
				text: error.response.data,
				icon: "error",
				confirmButtonColor: "#142B73"
			});
		}
	}
    
	return (
		<Conteiner>
			<UpSide>
				<Title data-cy="chatTitle" >{title}</Title>
				<Time>{time}</Time>
			</UpSide>
			<DownSide>
				<Description data-cy="chatDescription">{description}</Description>
				<Button data-cy="join" onClick={ enterChatroom }>
					<p>Join</p>
				</Button>
			</DownSide>
		</Conteiner>
	);
}

const Conteiner = styled.div`
    background-color: rgba(242, 194, 48, 0.3);
    width: 100%;
    min-height: 110px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    margin-bottom: 15px;
`;
const UpSide = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
`;
const DownSide = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
`;

const Title = styled.div`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 20px;
    color: #142B73;
    @media (max-width: 611px) {
        font-size: 18px;
    }
`;
const Description = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    width: 70%;
    @media (max-width: 611px) {
        font-size: 14px;
        line-height: 16px;
    }

`;
const Time = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    display: flex;
    text-align: end;
    color: #6A6A6A;
    @media (max-width: 611px) {
        font-size: 12px;
    }
`;
const Button = styled.div`
    width: 96px;
    height: 32px;
    background-color: #F2C230;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;    
    p {
        font-family: 'Poppins';
        font-weight: 700;
        font-size: 14px;
        color: #142B73;
    }
    @media (max-width: 611px) {
        width: 80px;
        height: 27px;
        p {
            font-size: 12px;
        }
    }
`;

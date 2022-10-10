import styled from "styled-components";
import { RiSendPlaneFill } from "react-icons/ri";
import { useState, useContext } from "react";
import UserContext from "../context/UserContext";
import { createMessage } from "../services/messages";
import Swal from "sweetalert2";

export default function WriteMessage({ chatId, fetchMessages }) {
	const { token } = useContext(UserContext);
	const [content, setContent] = useState("");
	const [loading, setLoading] = useState(false);

	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	async function sendMessage(e) {
		e.preventDefault();
		const body = { content };
		setLoading(true);
		try {
			await createMessage(body, config, chatId);
			setContent("");
			setLoading(false);
			fetchMessages();
		} catch (error) {
			Swal.fire({
				title: "Oops...",
				text: error.response.data,
				icon: "error",
				confirmButtonColor: "#142B73"
			});
			setLoading(false);
		}
	}

	return (
		<Conteiner onSubmit={sendMessage}>
			<Input
				type="text"
				placeholder="Write your message..."
				value={content}
				onChange={(e) => setContent(e.target.value)}
                
			/>
			<button disabled={loading} type="submit"><Send /></button>
		</Conteiner>
	);
}

const Conteiner = styled.form`
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    padding: 10px 15px;
    button {
        display: flex;
        border: none;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
    }
    @media (max-width: 611px) {
        height: 45px;
    }
`;

const Send = styled(RiSendPlaneFill)`
    width: 25px;
    height: 25px;
    color: #000000;
    cursor: pointer;
    @media (max-width: 611px) {
        width: 20px;
        height: 20px;
    }
`;

const Input = styled.input`
    width: 100%;
    height: 100%;
    font-weight: 400;
    font-size: 18px;
    border: none;
    outline: none;
    text-indent: 10px;
    color: #000000;
    @media (max-width: 611px) {
        font-size: 16px;
    }
`;
import styled from "styled-components";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function Participant({ name }) {
	return (
		<User>
			<h6>{name}</h6>
			<Add />
		</User>
	);
}

const User = styled.div`
    width: 100%;
    padding: 0 5px;
    display: flex;
    margin-bottom: 17px;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 611px) {
        margin-bottom: 0;
        margin-top: 12px;
        justify-content: flex-start;
    }
`;

const Add = styled(AiOutlineUserAdd)`
    width: 23px;
    height: 23px;
    color: #000000;
    cursor: pointer;
    @media (max-width: 611px) {
        width: 20px;
        height: 20px;
        margin-left: 20px;
    }
`;
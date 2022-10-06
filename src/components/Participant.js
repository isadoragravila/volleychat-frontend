import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Participant({ id, name }) {
	const navigate = useNavigate();
	function goToProfile() {
		navigate(`/profile/${id}`);
	}

	return (
		<User onClick={goToProfile}>
			<h6>{name}</h6>
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
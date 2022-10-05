import styled from "styled-components";
import { FaVolleyballBall } from "react-icons/fa";

export default function Logo() {
	return (
		<Title>
			<h1>VolleyChat</h1>
			<Volleyball />
		</Title>
	);
}

const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 60px;

    h1 {
        margin-right: 25px;
        font-family: 'Poppins';
        font-weight: 700;
        font-size: 70px;
        color: #F2C230;
    }

    @media (max-width: 611px) {
        h1 {
            font-size: 50px;
            margin-right: 15px;
        }
    }
`;
const Volleyball = styled(FaVolleyballBall)`
    width: 70px;
    height: 70px;
    color: #F2C230;
    
    @media (max-width: 611px) {
        width: 50px;
        height: 50px;
    }
`;
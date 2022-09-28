import styled from "styled-components";
import { FaVolleyballBall } from 'react-icons/fa';

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
`;
const Volleyball = styled(FaVolleyballBall)`
  width: 70px;
  height: 70px;
  color: #F2C230;
`;
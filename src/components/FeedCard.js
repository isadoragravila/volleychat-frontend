import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function FeedCard({ id, title, description, time, categoryId }) {
    const navigate = useNavigate();
    function enterChatroom() {
        navigate(`/feed/${categoryId}/chat/${id}`);
    }
    return (
        <Conteiner>
            <UpSide>
                <Title>{title}</Title>
                <Time>{time}</Time>
            </UpSide>
            <DownSide>
                <Description>{description}</Description>
                <Button onClick={ enterChatroom }>
                    <p>Join</p>
                </Button>
            </DownSide>
        </Conteiner>
    )
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
`
const DownSide = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
`

const Title = styled.div`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 20px;
    color: #142B73;
`
const Description = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    width: 70%;

`
const Time = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    display: flex;
    color: #6A6A6A;
`
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
`

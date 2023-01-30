import styled from "styled-components";
import Participant from "./Participant";

export default function ParticipantMenu({ chatName, users, getOutOfChat }) {
	return (
		<Container>
			<h2 data-cy="chatTitle">{chatName}</h2>
			<h3>Participants</h3>
			<ParticipantWrapper data-cy="participants">
				{users.map(item => <Participant key={item.id} name={item.name} id={item.id} />)}
			</ParticipantWrapper>
			<h5 data-cy="leaveRoom" onClick={getOutOfChat}>Leave chatroom</h5>
		</Container>
	);
}

const Container = styled.div`
    background-color: #e2e2e2;
    width: 275px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 102px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    position: relative;
    font-family: "Poppins";
    h2 {
        font-weight: 700;
        line-height: 28px;
        font-size: 22px;
        color: #142b73;
        text-align: center;
        margin-bottom: 20px;
    }
    h3 {
        font-weight: 600;
        line-height: 28px;
        font-size: 20px;
        color: #142b73;
        text-align: center;
        margin-bottom: 20px;
    }
    h5 {
        font-weight: 400;
        font-size: 14px;
        color: #142b73;
        text-align: center;
        background-color: #e2e2e2;
        padding-bottom: 37px;
        padding-top: 10px;
        width: 100%;
        cursor: pointer;
        text-decoration: underline;
        position: absolute;
        bottom: 0;
    }
    h6 {
        font-weight: 400;
        font-size: 18px;
        color: #000000;
        text-align: center;
        cursor: pointer;
    }
    @media (max-width: 611px) {
        display: none;
    }
`;

const ParticipantWrapper = styled.div`
    width: 100%;
    overflow-y: auto;
    ::-webkit-scrollbar {
        background: none;
        width: 4px;
    }

    ::-webkit-scrollbar-thumb {
    background: #c3c3c3; 
    border-radius: 10px;
    }
    
`;
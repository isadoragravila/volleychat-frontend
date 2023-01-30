import styled from "styled-components";
import Participant from "./Participant";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

export default function ParticipantMenuMobile({ chatName, users, openParticipants, setOpenParticipants, getOutOfChat }) {
	return (
		<Container>
			<Upside>
				<h3 onClick={() => setOpenParticipants(!openParticipants)}>
          Participants
					{openParticipants ? <ArrowUp /> : <ArrowDown />}
				</h3>
				<h2>{chatName}</h2>
				<Close onClick={getOutOfChat} />
			</Upside>
			<Downside>
				{openParticipants && users.map(item => <Participant key={item.id} name={item.name} id={item.id} />)}
			</Downside>
		</Container>
	);
}

const Container = styled.div`
    width: 100%;
    min-height: 42px;
    background-color: #e2e2e2;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 72px;
    z-index: 1;
    display: none;
    padding: 10px 15px;
    font-family: "Poppins";
    h2 {
        font-weight: 700;
        line-height: 22px;
        font-size: 18px;
        color: #142b73;
        text-align: center;
        max-width: 180px;
    }
    h3 {
        font-weight: 600;
        line-height: 20px;
        font-size: 16px;
        color: #142b73;
        text-align: center;
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    h6 {
        font-weight: 400;
        font-size: 14px;
        color: #000000;
        text-align: center;
        cursor: pointer;
    }

    @media (max-width: 611px) {
        display: flex;
        flex-direction: column;
    }
`;

const Upside = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Downside = styled.div`
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
  @media (max-width: 611px) {
    max-height: 25vh;
  }
    
`;

const ArrowDown = styled(RiArrowDownSLine)`
  width: 20px;
  height: 20px;
  color: #142b73;
`;

const ArrowUp = styled(RiArrowUpSLine)`
  width: 20px;
  height: 20px;
  color: #142b73;
`;

const Close = styled(IoClose)`
  width: 20px;
  height: 20px;
  color: #142b73;
  cursor: pointer;
`;
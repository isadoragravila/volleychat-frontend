import styled from "styled-components";
import { useState } from "react";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import UserContext from "../context/UserContext";
import { useContext } from "react";

export default function ProfileBox() {
	const [toggleBio, setToggleBio] = useState(false);
	const { userData: user } = useContext(UserContext);

	return (
		<Conteiner>
			<UpSide>
				<Title >Hello, {user.username}</Title>
				<Toggle onClick={() => setToggleBio(!toggleBio)}>
          Show bio
					{toggleBio ? (<ArrowUp />) : <ArrowDown />}
				</Toggle>
			</UpSide>
			<DownSide>
				{toggleBio ? (<Bio>{user.bio}</Bio>) : null}
			</DownSide>
		</Conteiner>
	);
}

const Conteiner = styled.div`
    background-color: #f2f2f2;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 0 16px 0;
    margin-bottom: 15px;
    border-radius: 7px;
`;
const UpSide = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`;
const DownSide = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0 16px;
`;

const Title = styled.div`
    font-family: 'Poppins';
    font-weight: 700;
    font-size: 25px;
    color: #142B73;
    @media (max-width: 611px) {
        font-size: 20px;
        margin-left: 10px;
    }
`;
const Bio = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    margin-top: 20px;
    @media (max-width: 611px) {
        font-size: 14px;
        line-height: 16px;
    }

`;
const Toggle = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    display: flex;
    text-align: center;
    color: #6A6A6A;
    align-items: center;
    margin-right: 10px;
    cursor: pointer;
    @media (max-width: 611px) {
        font-size: 12px;
    }
`;

const ArrowUp = styled(RiArrowUpSLine)`
  width: 16px;
  height: 16px;
  color: #6A6A6A;
  @media (max-width: 611px) {
        width: 14px;
        height: 14px;
    }
`;

const ArrowDown = styled(RiArrowDownSLine)`
  width: 16px;
  height: 16px;
  color: #6A6A6A;
  @media (max-width: 611px) {
        width: 14px;
        height: 14px;
    }
`;

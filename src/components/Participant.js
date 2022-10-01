import styled from "styled-components";
import { AiOutlineUserAdd } from "react-icons/ai";

export default function Participant({ name, id }) {
    return (
        <User>
            <h6>{name}</h6>
            <Add />
        </User>
    )
}

const User = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 17px;
    align-items: center;
    justify-content: space-between;
`;

const Add = styled(AiOutlineUserAdd)`
    width: 23px;
    height: 23px;
    color: #000000;
    cursor: pointer;
`;
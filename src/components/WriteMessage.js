import styled from "styled-components";
import { RiSendPlaneFill } from "react-icons/ri";

export default function WriteMessage() {
    return (
        <Conteiner>
            <Input placeholder="Write your message..." />
            <Send />
        </Conteiner>
    )
}

const Conteiner = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #ffffff;
    position: absolute;
    bottom: 0;
    padding: 10px 15px;
`;

const Send = styled(RiSendPlaneFill)`
    width: 25px;
    height: 25px;
    color: #000000;
    cursor: pointer;
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
`;
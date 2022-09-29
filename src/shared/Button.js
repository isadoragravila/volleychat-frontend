import styled from "styled-components";

export default function Button({ type, name, disabled, id, onClick }) {
    return (
        <ButtonStyle type={type} disabled={disabled} id= {id} onClick={onClick}>
            {disabled ? "Loading" : name }
        </ButtonStyle>
    );
}

const ButtonStyle = styled.button`
    width: ${props => props.id !== "create" ? "90%" : "70%" };
    height: ${props => props.id !== "create" ? "50px" : "35px" };
    display: flex;
    background-color: #f2c230;
    border-radius: ${props => props.id !== "activate" ? "5px" : "0" };
    border: none;
    font-size: ${props => props.id !== "create" ? "20px" : "18px" };
    font-weight: 700;
    color: #142b73;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 20px;
    opacity: ${props => props.disabled ? 0.8 : 1 };
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
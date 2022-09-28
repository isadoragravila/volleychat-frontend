import styled from "styled-components";

export default function Button({ name, disabled }) {
    return (
        <ButtonStyle disabled={disabled}>
            {disabled ? "Loading" : name }
        </ButtonStyle>
    );
}

const ButtonStyle = styled.button`
    width: 90%;
    height: 50px;
    display: flex;
    background-color: #f2c230;
    border-radius: 5px;
    border: none;
    font-size: 23px;
    font-weight: 700;
    color: #142b73;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    margin-top: 20px;
    opacity: ${props => props.disabled ? 0.8 : 1 };
`
import styled from "styled-components";

export default function Input({ type, placeholder, disabled, value, onChange, id }) {
    return (
        <InputStyle
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
            required
            id={id}
        />
    );
}

const InputStyle = styled.input`
    background-color: #f2f2f2;
    height: ${props => props.id !== "title" ? "50px" : "35px" };
    width: 90%;
    border-radius: 5px;
    font-weight: 600;
    font-size: ${props => props.id !== "title" ? "23px" : "18px" };
    border: none;
    outline: none;
    text-indent: 10px;
    color: #142B73;
    margin-bottom: 10px;

    ::placeholder {
        color: #142B73;
        font-weight: 300;
    }
    @media (max-width: 611px) {
        font-size: ${props => props.id !== "create" ? "20px" : "15px" };
    }
`;
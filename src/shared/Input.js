import styled from "styled-components";

export default function Input({ type, placeholder, disabled, value, onChange }) {
    return (
        <InputStyle
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
            required
        />
    );
}

const InputStyle = styled.input`
    background-color: #f2f2f2;
    height: 50px;
    width: 90%;
    border-radius: 5px;
    font-size: 23px;
    border: none;
    outline: none;
    text-indent: 10px;
    color: #142B73;
    margin-bottom: 10px;

    ::placeholder {
        color: #142B73;
        font-weight: 300;
    }
`
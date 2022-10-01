import styled from "styled-components";

export default function Message({ name, content, justified }) {
    return (
        <Conteiner justified={justified}>
            <Content justified={justified}>
                <User>{name}</User>
                <Text>{content}</Text>
            </Content>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: ${props => props.justified ? "flex-end" : "flex-start" };
`;

const Content = styled.div`
    width: 50%;
    min-height: 50px;
    background-color: ${props => props.justified ? "rgba(242, 194, 48, 0.3)" : "rgba(20, 43, 115, 0.3)" };
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px 10px 0 10px;
    padding: 8px;
`;

const User = styled.div`
    font-family: 'Poppins';
    font-weight: 600;
    font-size: 16px;
    line-height: 18px;
    color: #142B73;
`;

const Text = styled.div`
    font-family: 'Poppins';
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
    word-wrap: break-word;
`;
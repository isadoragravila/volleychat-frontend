import styled from "styled-components";
import CreateChat from "./CreateChat";
import FeedCard from "./FeedCard";

export default function ChatMenu({ categoryId }) {
    const chats = [
        {
            id: 1,
            title: "Brasil x Colômbia",
            description: "Espaço para discussão do terceiro jogo do Brasil no mundial feminino de vôlei",
            time: "7 hours"
        },
        {
            id: 2,
            title: "Superliga feminina",
            description: "O que esperar das seleções mineiras nesse ano 22-23",
            time: "13 hours"
        }
    ];

    return (
        <Conteiner>
        <h4>women's volleyball</h4>
            <CreateChat categoryId={categoryId} />
            {chats.length === 0 ? (
                <Informative>
                    <p>There aren't any chats yet! Create the first one!</p>
                </Informative>
            ) : (
                chats.map(item => <FeedCard key={item.id} id={item.id} title={item.title} description={item.description} time={item.time} />)
            )}
        </Conteiner>
    )
}

const Conteiner = styled.div`
    h4 {
        font-family: "Poppins";
        font-weight: 700;
        font-size: 25px;
        color: #142b73;
    }
`

const Informative = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin-top: 30px;
    p {
        font-family: "Poppins";
        font-weight: 400;
        line-height: 24px;
        font-size: 20px;
        color: #142b73;
        text-align: center;
        width: 300px;
    }
`
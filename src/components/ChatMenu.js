import styled from "styled-components";
import CreateChat from "./CreateChat";
import FeedCard from "./FeedCard";

export default function ChatMenu({ categoryId, chats, setChats, category }) {
    return (
        <Conteiner>
        <h4>{category}</h4>
            <CreateChat setChats={setChats} categoryId={categoryId} />
            {chats.length === 0 ? (
                <Informative>
                    <p>There aren't any chats yet! Create the first one!</p>
                </Informative>
            ) : (
                chats.map(chat => <FeedCard key={chat.id} id={chat.id} title={chat.title} description={chat.description} time={chat.fromNow} categoryId={categoryId} />)
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
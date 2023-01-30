import styled from "styled-components";
import Message from "./Message";

export default function MessageBoardContainer({ messages, userId, children }) {
	return (
		<Container>
			<MessageBoard>
				{messages.map(item => <Message key={item.id} name={item.user.username} content={item.content} writerId={item.userId} userId={userId} />)}
				<Margin></Margin>
			</MessageBoard>
			{children}
		</Container>
	);
}

const Container = styled.div`
    background-color: rgba(226, 226, 226, 0.3);
    width: 508px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    height: 100vh;
    @media (max-width: 611px) {
        width: 100%;
    }
`;

const MessageBoard = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column-reverse;
    padding-bottom: 70px;
    overflow-y: auto;

    ::-webkit-scrollbar {
        background: none;
        width: 6px;
    }
    ::-webkit-scrollbar-thumb {
        background: #c3c3c3; 
        border-radius: 10px;
    }
    @media (max-width: 611px) {
        padding-bottom: 60px;
    }
`;

const Margin = styled.div`
    min-height: 72px;
    width: 100%;
`;
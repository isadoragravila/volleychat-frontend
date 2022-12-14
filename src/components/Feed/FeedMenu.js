import styled from "styled-components";
import ChatCard from "./ChatCard";

export default function FeedMenu({ chats, title }) {
	return (
		<>
			<Title>{title}</Title>
			<Conteiner>
				{chats.length === 0 ? (
					<Informative>
						<p>There are no chats yet!</p>
					</Informative>
				) : (
					chats.map(chat => <ChatCard key={chat.id} chatId={chat.id} title={chat.title} description={chat.description} time={chat.category.name} categoryId={chat.categoryId} />)
				)}
			</Conteiner>
		</>
	);
}

const Conteiner = styled.div`
  h4 {
    font-family: "Poppins";
    font-weight: 700;
    font-size: 25px;
    color: #142b73;
  }
  @media (max-width: 611px) {
    h4 {
      font-size: 20px;
      margin-left: 10px;
    }
  }
`;

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
  @media (max-width: 611px) {
    p {
      font-size: 18px;
      max-width: 300px;
    }
  }
`;

const Title = styled.div`
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 22px;
  color: #142B73;
  margin-left: 10px;
  margin-bottom: 10px;
  @media (max-width: 611px) {
    font-size: 18px;
    margin-left: 20px;
  }
`;
import styled from "styled-components";
import PostCard from "./PostCard";

export default function Timeline() {
	//buscar posts
	const posts = [{
		id: 1,
		username: "bobesponja",
		chatroom: "Brasil x Itália",
		type: "created"
	}];

	return (
		<>
			{posts.length === 0 ? (
				<Informative>
					<p>There is no activity yet! Create a chat room or join one!</p>
				</Informative>
			) : (
				posts.map(item => <PostCard key={item.id} username={item.username} chatroom={item.chatroom} type={item.type} />)
			)}
		</>
	);
}

const Informative = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
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
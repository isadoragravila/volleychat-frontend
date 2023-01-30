import styled from "styled-components";
import Header from "../Header";

export default function ChatroomContainer({ children }) {
	return (
		<Container>
			<Header />
			<Content>
				{children}
			</Content>
		</Container>
	);
}

const Container = styled.div`
    background-color: #f2f2f2;
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;
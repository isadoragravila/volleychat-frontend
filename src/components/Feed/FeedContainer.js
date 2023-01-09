import styled from "styled-components";
import Header from "../Header";

export default function FeedContainer({ children }) {
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
  min-height: 100vh;
`;

const Content = styled.div`
    display: flex;
    padding-top: 130px;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 611px) {
        align-items: center;
        flex-direction: column;
        width: 100%;
        padding-top: 100px;
    }
`;
import styled from "styled-components";

export default function FeedWrapper({children}) {
	return(
		<Container>
			{children}
		</Container>
	);
}

const Container = styled.div`
    width: 480px;
    @media (max-width: 611px) {
        width: 100%;
        margin-top: 20px;
    }
`;
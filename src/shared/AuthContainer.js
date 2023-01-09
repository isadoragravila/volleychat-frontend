import styled from "styled-components";

export default function AuthContainer({children}) {
	return (
		<Container>
			{children}
		</Container>
	);
}

const Container = styled.div`
  background-color: #142B73;
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  align-items: center;
  min-height: 100vh;
`;
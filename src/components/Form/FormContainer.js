import styled from "styled-components";

export default function FormContainer({ children, onSubmit }) {
	return (
		<Container onSubmit={onSubmit}>
			{children}
		</Container>
	);
}

const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  @media (max-width: 611px) {
    width: 100%;
  }
`;
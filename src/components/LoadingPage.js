import styled from "styled-components";

export default function LoadingPage() {
	return (
		<Container>
      Loading ...
		</Container>
	);
}

const Container = styled.div`
    text-align: center;
    font-weight: 700;
    font-size: 33px;
    font-family: 'Poppins';
    color: #F2C230;
    margin-bottom: 50px;
    margin-top: 50px;
    @media (max-width: 611px) {
      font-size: 25px;
  }
`;
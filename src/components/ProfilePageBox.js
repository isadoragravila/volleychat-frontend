import styled from "styled-components";

export default function ProfilePageBox({ profile }) {
	return (
		<Profile>
			<Title>
				<Name data-cy="username">{`${profile.username}' chats`}</Name>
				<Bio>{profile.bio}</Bio>
			</Title>
			<img src={profile.image} alt="user" />
		</Profile>
	);
}

const Profile = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  img {
    width: 75px;
    height: 75px;
    object-fit: cover;
    border-radius: 37.5px;
  }
  @media (max-width: 611px) {
      img {
      width: 60px;
      height: 60px;
      margin-right: 10px;
    }
  }
`;

const Title = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 25px;
  color: #142B73;
  @media (max-width: 611px) {
    font-size: 20px;
    margin-left: 10px;
  }
`;

const Bio = styled.div`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000000;
  margin-top: 20px;
  margin-bottom: 16px;
  @media (max-width: 611px) {
    font-size: 14px;
    line-height: 16px;
    margin-left: 10px;
  }
`;
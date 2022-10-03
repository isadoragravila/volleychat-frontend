import styled from "styled-components";
import { RiArrowRightSLine, RiArrowDownSLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function MenuButton({ name, id }) {
    const navigate = useNavigate();

    return (
        <Button onClick={() => navigate(`/feed/${id}`)} >
            <p>{name}</p><Arrow />
        </Button>
    )
}

const Button = styled.div`
    width: 216px;
    height: 50px;
    border-radius: 32px;
    background-color: #f2c230;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin-bottom: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 15px;
    cursor: pointer;
    p{
        font-family: "Poppins";
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        color: #142b73;
        text-align: center;
        width: 100%;
    }
    @media (max-width: 611px) {
        width: 150px;
        height: 30px;
        margin-bottom: 15px;
        p {
            font-size: 12px;
            line-height: 14px;
        }
    }
`;

const Arrow = styled(RiArrowRightSLine)`
  width: 30px;
  height: 30px;
  color: #142b73;
  @media (max-width: 611px) {
        width: 15px;
        height: 15px;
    }
`;

const ArrowDown = styled(RiArrowDownSLine)`
  width: 30px;
  height: 30px;
  color: #142b73;
`;
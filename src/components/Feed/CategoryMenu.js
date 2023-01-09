import styled from "styled-components";
import MenuButton from "./MenuButton";

export default function CategoryMenu({ categories, children }) {
	return (
		<LeftSide>
			<UpSide>
				<h3>Choose your chat category</h3>
				{children}
			</UpSide>
			<DownSide>
				{categories.map(item => <MenuButton key={item.id} id={item.id} name={item.name} />)}
			</DownSide>
		</LeftSide>
	);
}

const LeftSide = styled.div`
    background-color: rgba(20, 43, 115, 0.3);
    width: 275px;
    margin-right: 28px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    h3 {
        font-family: "Poppins";
        font-weight: 600;
        line-height: 28px;
        font-size: 20px;
        color: #142b73;
        text-align: center;
        margin-bottom: 17px;
    }
    h6 {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 14px;
        color: #142b73;
        text-align: center;
        margin-bottom: 17px;
        cursor: pointer;
        text-decoration: underline;
    }
    @media (max-width: 611px) {
        width: 100%;
        margin-right: 0;
        padding: 10px 30px;
        h3 {
            font-size: 16px;
            margin-bottom: 20px;
            line-height: 20px;
        }
        h6 {
            font-size: 12px;
            line-height: 14px;
        }
    }

    @media (max-width: 450px) {
        h3 {
            max-width: 180px;
        }
        h6 {
            max-width: 90px;
        }
    }
`;

const UpSide = styled.div`
    width: 100%;
    @media (max-width: 611px) {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

const DownSide = styled.div`
    @media (max-width: 611px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;
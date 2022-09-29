import styled from "styled-components";
import Header from "../components/Header";
import CategoryMenu from "../components/CategoryMenu";
import Timeline from "../components/Timeline";
import { useState } from "react";

export default function Feed () {
    return (
        <Conteiner>
            <Header />
            <Content>
                <LeftSide>
                <h3>Choose your chat category</h3>
                    <CategoryMenu />
                </LeftSide>
                <RightSide>
                    <Timeline />
                </RightSide>
            </Content>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    background-color: #f2f2f2;
    min-height: 100vh;
`;

const Content = styled.div`
    display: flex;
    padding-top: 130px;
    align-items: flex-start;
    justify-content: center;
`;

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
        margin-bottom: 48px;
    }
`;

const RightSide = styled.div`
    width: 480px;
`;
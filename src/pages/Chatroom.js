import styled from "styled-components";
import Header from "../components/Header";
import Participant from "../components/Participant";
import WriteMessage from "../components/WriteMessage";
import Message from "../components/Message";

export default function Chatroom() {
    const users = [
        {
            id: 1,
            name: "isadoragravila"
        },
        {
            id: 2,
            name: "bobesponja"
        }
    ];

    const messages = [
        {
            name: "isadoragravila",
            content: "uihaisuhduaisf iudsahduiaha",
            justify: true
        },
        {
            name: "bobesponja",
            content: "uihaisuhduaisf iudsahduiaha",
            justify: false
        },
        {
            name: "isadoragravila",
            content: "uihaisuhduaisf iudsahduiaha",
            justify: true
        },
        {
            name: "bobesponja",
            content: "uihaisuhduaisf iudsahduiaha",
            justify: false
        },
        {
            name: "isadoragravila",
            content: "uihaisuhduaisf iudsahduiaha",
            justify: true
        },
        {
            name: "isadoragravila",
            content: "uihaisuhduaisf iudsahduiaha",
            justify: true
        }
    ]

    return (
        <Conteiner>
            <Header />
            <Content>
                <LeftSide>
                    <h3>Participants</h3>
                    {users.map(item => <Participant key={item.id} name={item.name} id={item.id} />)}
                </LeftSide>
                <RightSide>
                    <MessageBoard>
                        {messages.map(item => <Message name={item.name} content={item.content} justified={item.justify} />)}
                        <Margin></Margin>
                    </MessageBoard>
                    <WriteMessage />
                </RightSide>
            </Content>
        </Conteiner>
    )
}

const Conteiner = styled.div`
    background-color: #f2f2f2;
    height: 100vh;
`;

const Content = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const LeftSide = styled.div`
    background-color: #e2e2e2;
    width: 275px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    padding: 102px 30px 30px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    h3 {
        font-family: "Poppins";
        font-weight: 600;
        line-height: 28px;
        font-size: 20px;
        color: #142b73;
        text-align: center;
        margin-bottom: 25px;
    }
    h6 {
        font-family: "Poppins";
        font-weight: 400;
        font-size: 18px;
        color: #000000;
        text-align: center;
        cursor: pointer;
    }
`;

const RightSide = styled.div`
    background-color: rgba(226, 226, 226, 0.3);
    width: 508px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    position: relative;
    height: 100vh;
`;

const MessageBoard = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column-reverse;
    padding-bottom: 70px;
    overflow-y: auto;

::-webkit-scrollbar {
  background: none;
  width: 4px;
}
`;

const Margin = styled.div`
    min-height: 72px;
    width: 100%;
`;
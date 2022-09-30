import styled from "styled-components";
import { useState, useContext } from "react";
import Input from "../shared/Input";
import Button from "../shared/Button";
import { IoClose } from "react-icons/io5";
import { createChat } from "../services/chats";
import UserContext from "../context/UserContext";

export default function CreateChat({ categoryId }) {
    const { token } = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const [openCreate, setOpenCreate] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    async function create(e) {
        e.preventDefault();
        setLoading(true);

        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const body = { title, description };

        const response = await createChat(body, config, categoryId);

        if (response === 201) {
            setTitle('');
            setDescription('');
            setLoading(false);
            setOpenCreate(false)
        } else {
            setLoading(false);
        }
    }

    return (
        <Conteiner>
            {openCreate ? (
                <Content>
                    <Form onSubmit={create}>
                        <Input
                            type="text"
                            disabled={loading}
                            placeholder='Title'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            id="title"
                        />
                        <TextArea
                            disabled={loading}
                            placeholder='Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                        <Button type="submit" disabled={loading} name={"Create"} id="create" />
                    </Form>
                    <ArrowUp onClick={() => setOpenCreate(false)} />
                </Content>
            ) : (
                <ButtonArea>
                    <Button type="button" disabled={loading} name={"Create a new chat room"} id="activate" onClick={() => setOpenCreate(true)} />
                </ButtonArea>
            )}
        </Conteiner>
    )
}

const Conteiner = styled.div`
    margin-bottom: 20px;
`

const Content = styled.div`
    background-color: rgba(242, 194, 48, 0.7);
    width: 100%;
    min-height: 90px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    padding: 16px 0;
    margin-top: 20px;
    position: relative;
`;

const Form = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;

const TextArea = styled.textarea`
    height: 80px;
    width: 90%;
    background-color: #f2f2f2;
    text-indent: 10px;
    color: #949494;
    border: none;
    outline: none;
    border-radius: 5px;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #000000;
    resize: none;
    ::placeholder {
        color: #142B73;
        font-weight: 300;
    }
`;

const ArrowUp = styled(IoClose)`
  width: 27px;
  height: 27px;
  color: #142b73;
  position: absolute;
  right: 10px;
  bottom: 10px;
  cursor: pointer;
`;

const ButtonArea = styled.form`
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: column;
`;
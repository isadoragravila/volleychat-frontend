import styled from "styled-components";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUser } from "../services/auth";

export default function RegisterForm() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('');
    const [bio, setBio] = useState('');
    const navigate = useNavigate();

    async function registerUser(e) {
        e.preventDefault();
        setLoading(true);

        const userData = { username, email, password, image, bio };

        const response =  await createUser(userData);
        if (response === 201) {
            navigate("/");
        } else {
            setLoading(false);
            alert(response)
        }
    }

    return (
        <Form onSubmit={registerUser}>
            <Input type="text" placeholder="username" disabled={loading} value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input type="email" placeholder="email" disabled={loading} value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input type="password" placeholder="password" disabled={loading} value={password} onChange={(e) => setPassword(e.target.value)} />
            <Input type="url" placeholder="url" disabled={loading} value={image} onChange={(e) => setImage(e.target.value)} />
            <Input type="text" placeholder="bio" disabled={loading} value={bio} onChange={(e) => setBio(e.target.value)} />
            <Button type="submit" disabled={loading} name={"Register"} />
        </Form>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
`
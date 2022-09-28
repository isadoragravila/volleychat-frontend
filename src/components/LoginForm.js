import styled from "styled-components";
import Button from "../shared/Button";
import Input from "../shared/Input";
import { useState } from "react";

export default function RegisterForm() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    async function loginUser(e) {
        e.preventDefault();
        setLoading(true);
        console.log("logou");
    }

    return (
        <Form onSubmit={loginUser}>
            <Input type="text" placeholder="username" disabled={loading} value={username} onChange={(e) => setUsername(e.target.value)} />
            <Input type="password" placeholder="password" disabled={loading} value={password} onChange={(e) => setPassword(e.target.value)} />
            <Button type="submit" disabled={loading} name={"Login"} />
        </Form>
    );
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 600px;
`
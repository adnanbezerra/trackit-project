import { useContext, useState } from "react"
import UserContext from "./contexts/UserContext"
import logo from "./Images/logo.png"
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";

import { ThreeDots } from 'react-loader-spinner';

export default function InitialScreen() {
    const navigate = useNavigate();

    const { setLoggedUser } = useContext(UserContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [disabled, setDisabled] = useState(false);

    function submitForm(event) {
        event.preventDefault();

        const user = { email: email, password: password }
        setDisabled(true);

        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", user)
            .then(answer => {
                setLoggedUser(answer.data)
                navigate("/habito")
            })
            .catch(error => {
                setDisabled(false);
                alert("Login ou senha errados! Tente novamente.")
            })
    }

    return (
        <Screen>
            <img src={logo} alt="" />

            <Form onSubmit={submitForm}>
                <Input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} disabled={disabled} />
                <Input type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} disabled={disabled} />
                <Button disabled={disabled}> {disabled ? <ThreeDots color="white" height={80} width={50} />
                    : "Entrar"}</Button>
            </Form>

            <Link to='/register'><Linko>Não tem uma conta? Cadastre-se!</Linko></Link>
        </Screen>
    )
}

const Linko = styled.p`
    color: #52B6FF;
    font-size: 14px;
    margin-top: 25px;

    text-decoration-line: underline;
`

const Button = styled.button`
    margin-top: 6px;
    background-color: #52B6FF;
    display: flex;
    justify-content: center;
    align-items: center;
        
    height: 45px;
    font-size: 21px;
    color: white;

    border-radius: 5px;
    border: 0;

    &:hover {
        cursor: pointer;
    }

    &:disabled {
        background-color: #86ccff;
    }
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
        width: 300px;
        height: 45px;
        border: 1px solid #D5D5D5;
        border-radius: 5px;

        color: #666666;
        display: flex;
        align-items: center;

        margin-top: 6px;
        padding-left: 10px;

        ::placeholder {
            color: #DBDBDB;
            font-size: 20px;
        }

        &:disabled{
            background-color: #F2F2F2;
            color: #AFAFAF;
            border: 1px solid #D5D5D5;;
        }
`

const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;

    margin-top: 70px;
`

import { useState } from "react"
import logo from "../Images/logo.png"
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";
import styled from "styled-components";

import { ThreeDots } from 'react-loader-spinner';

export default function RegisterScreen() {
    const navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        email: "",
        name: "",
        image: "",
        password: ""
    })
    const [disabled, setDisabled] = useState(false);

    function clearInputs() {
        setNewUser({
            email: "",
            name: "",
            image: "",
            password: ""
        })
    }

    function submitForm(event) {
        event.preventDefault();

        if (!newUser.image.startsWith("https://")) {
            alert("Insira um link de imagem válido!");
            return;
        }

        setDisabled(true);
        axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up", newUser)
            .then(answer => {
                alert("Cadastro concluído! Agora faça o login")
                navigate('/')
            })
            .catch(error => {
                alert("Falha no cadastro! Tente novamente.")
                clearInputs();
                setDisabled(false);
            })
    }

    return (
        <Screen>
            <Link to='/'> <img src={logo} alt="" /> </Link>

            <Form onSubmit={submitForm} >
                <Input type="email" placeholder='email' value={newUser.email} onChange={e => setNewUser({ ...newUser, email: e.target.value })} disabled={disabled} />
                <Input type='password' placeholder='senha' value={newUser.password} onChange={e => setNewUser({ ...newUser, password: e.target.value })} disabled={disabled} />
                <Input type='text' placeholder='nome' value={newUser.name} onChange={e => setNewUser({ ...newUser, name: e.target.value })} disabled={disabled} />
                <Input type='text' placeholder='foto' value={newUser.image} onChange={e => setNewUser({ ...newUser, image: e.target.value })} disabled={disabled} />

                <Button disabled={disabled}>{disabled ? <ThreeDots color="white" height={80} width={50} />
                    : "Cadastrar"}</Button>
            </Form>

            <Link to='/'><Linko>Já tem uma conta? Faça login!</Linko></Link>
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

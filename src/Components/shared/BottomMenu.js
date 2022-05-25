import styled from "styled-components"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";

export default function BottomMenu() {
    const percentage = 66;

    return (
        <Footer>
            <Link to='/habito'><Linko>Hábitos</Linko></Link>
            <div style={{width: '91px', height: '91px', marginBottom: '40px'}}>
                <Link to='/hoje'><CircularProgressbar value={percentage} text={"Hoje"} /></Link>
            </div>
            <Link to='/historico'><Linko>Histórico</Linko></Link>
        </Footer>
    )
}

const Linko = styled.p`
    font-size: 18px;
    color: #52b6ff;
`

const Footer = styled.div`
    height: 70px;
    width: 100%;
    position: fixed;
    bottom: 0;

    background-color: white;

    display: flex;
    align-items: center;
    justify-content: space-around;
`
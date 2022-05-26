import styled from "styled-components"
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { useContext } from "react"
import UserContext from "../contexts/UserContext";


export default function BottomMenu() {
    const { concludedHabits } = useContext(UserContext) 

    return (
        <Footer>
            <Link to='/habito' style={{ textDecoration: 'none' }}><Linko>Hábitos</Linko></Link>
            <div style={{ width: '91px', height: '91px', marginBottom: '40px' }}>
                <Link to='/hoje'>
                    <CircularProgressbar
                        value={concludedHabits}
                        text={"Hoje"}
                        background={true}
                        backgroundPadding={6}
                        styles={buildStyles({
                            textColor: 'white',
                            backgroundColor: '#52B6FF',
                            pathColor: 'white',
                            trailColor: "#52B6FF"
                        })}
                    />
                </Link>
            </div>
            <Link to='/historico' style={{ textDecoration: 'none' }}><Linko>Histórico</Linko></Link>
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
    box-sizing: border-box;

    background-color: white;

    display: flex;
    align-items: center;
    justify-content: space-around;
`
import styled from "styled-components"
import loguinho from "../Images/TrackIt.png"

import UserContext from "../contexts/UserContext"
import { useContext } from "react"

export default function TopBar() {
    const { loggedUser } = useContext(UserContext);

    return(
        <Header>
            <Loguinho src={loguinho} alt="" />
            <User src={loggedUser.image} alt='' />
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 70px;
    width: 100%;

    position: fixed;
    top: 0;
    padding: 0 20px;
    box-sizing: border-box !important;

    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`

const Loguinho = styled.img`
    height: 35px;
    width: 90px;
`

const User = styled.img`
    width: 50px;
    height: 50px;

    border-radius: 50%;
`

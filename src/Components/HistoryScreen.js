import styled from "styled-components"

export default function HistoryScreen() {
    return (
        <Screen>
            <ScreenTitle>Histórico</ScreenTitle>

            <Content>Em breve você poderá ver o histórico dos seus hábitos aqui!</Content>
        </Screen>
    )
}

const Content = styled.p`
    font-size: 18px;
    color: #666666;
`

const Screen = styled.div`
    background-color: #E5E5E5;
    width: 100%;
    height: 100%;

    padding: 0 17px;
    padding-top: 100px;
    box-sizing: border-box;
`

const ScreenTitle = styled.p`
    color: #126BA5;
    font-size: 22px;
    margin-bottom: 30px;
`
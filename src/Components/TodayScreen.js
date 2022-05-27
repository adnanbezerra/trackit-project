import { useContext, useEffect, useState } from "react"
import UserContext from "./contexts/UserContext"
import DailyHabit from "./HabitsAssets/DailyHabit"

import styled from "styled-components"
import dayjs from "dayjs"
import { locale } from "dayjs/locale/pt-br"
import axios from "axios"

export default function TodayScreen() {

    const [todayHabits, setTodayHabits] = useState([])

    const { loggedUser, concludedHabits, setConcludedHabits } = useContext(UserContext);
    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token
        }
    }
    useEffect(() => {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config)
            .then(answer => {
                setTodayHabits([...answer.data])
                for (let i = 0; i < todayHabits.length; i++) {
                    if (todayHabits[i].done === true) setConcludedHabits([...concludedHabits, todayHabits[i]])
                }
            })
            .catch(error => console.log("deu bãon't"));
    }, [])

    console.log(todayHabits)

    const now = dayjs().locale('pt-br')
    let today = now.format('dddd')
    today = today.charAt(0).toUpperCase() + today.slice(1)

    return (
        <Screen>
            <ScreenTitle>{today} - {now.format('DD/MM')}</ScreenTitle>
            {concludedHabits ? <></> : <TextoHabito concluido={false}>Nenhum hábito concluído ainda</TextoHabito>}

            {todayHabits ? todayHabits.map((habit) => <DailyHabit name={habit.name} isConcluded={habit.done} streak={habit.currentSequence} record={habit.highestSequence} />)

                : <Content>Você não tem hábitos cadastrados para hoje</Content>}
        </Screen>
    )
}

const TextoHabito = styled.p`
    font-size: 18px;
    margin-top: 3px;
    margin-bottom: 28px;

    color: ${props => props.concluido ? "#8FC549" : "#BABABA"};
`

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
    
`
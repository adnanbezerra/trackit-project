import { useContext } from "react"
import UserContext from "./contexts/UserContext"
import DailyHabit from "./HabitsAssets/DailyHabit"

import styled from "styled-components"
import dayjs from "dayjs"
import { useEffect } from "react"

export default function TodayScreen() {
    const { loggedUser, concludedHabits, todayHabits, getTodayHabits } = useContext(UserContext);
    
    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token
        }
    }

    useEffect(() => getTodayHabits,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []);


    const now = dayjs().locale('pt-br')
    let today = now.format('dddd')
    today = today.charAt(0).toUpperCase() + today.slice(1)

    let percentage = 0;
    if (todayHabits.length !== 0) percentage = 100 * (concludedHabits / todayHabits.length);

    return (
        <Screen>
            <ScreenTitle>{today} - {now.format('DD/MM')}</ScreenTitle>
            {concludedHabits ? <TextoHabito concluido={true}>{percentage}% dos hábitos concluídos</TextoHabito> : <TextoHabito concluido={false}>Nenhum hábito concluído ainda</TextoHabito>}

            {todayHabits ? todayHabits.map((habit) => <DailyHabit id={habit.id} name={habit.name} isConcluded={habit.done} streak={habit.currentSequence} record={habit.highestSequence} config={config} getTodayHabits={getTodayHabits} />)
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

import axios from "axios";
import styled from "styled-components";

import UserContext from "../contexts/UserContext";
import { useContext } from "react";
import { useState } from "react";

export default function DailyHabit({ name, isConcluded, getTodayHabits, streak, record, id }) {

    const { loggedUser, concludedHabits, setConcludedHabits } = useContext(UserContext)

    const [isRecord, setIsRecord] = useState(streak === record);

    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token
        }
    }

    function taskClick() {
        if (!isConcluded) {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, null, config)
                .then(answer => {
                    getTodayHabits();
                    setConcludedHabits(concludedHabits + 1)
                })
                .catch(error => alert("Não foi possível dar check no hábito!"))
        } else {
            axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, null, config)
                .then(answer => {
                    getTodayHabits();
                    setConcludedHabits(concludedHabits - 1)
                })
                .catch(error => alert("Não foi possível desmarcar o hábito!"))
        }
    }

    return (
        <HabitScreen>
            <InfoRow>
                <HabitTitle>{name}</HabitTitle>
                <TitleData>Sequência atual: <Daily isConcluded={isConcluded}>{streak === 1 ? `${streak} dia` : `${streak} dias`}</Daily></TitleData>
                <TitleData>Seu recorde: <Daily isRecord={isRecord}>{record === 1 ? `${record} dia` : `${record} dias`}</Daily></TitleData>
            </InfoRow>

            {isConcluded ? <ion-icon name="checkbox" onClick={taskClick} style={{ color: "#8fc549" }}></ion-icon>
                :
                <ion-icon name="checkbox" onClick={taskClick} style={{ color: "#ebebeb" }}></ion-icon>}
        </HabitScreen>
    )
}

const Daily = styled.span`
    color: ${props => props.isConcluded ? "#8FC549" : props.isRecord ? "#8FC549" : "#666666"}
`

const InfoRow = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
`

const TitleData = styled.p`
    font-size: 13px;
    color: #666666;
`

const HabitTitle = styled.div`
    font-size: 20px;
    margin-bottom: 7px;
    color: #666666;
`

const HabitScreen = styled.div`
    width: 100%;
    height: 94px;
    border-radius: 5px;
    background-color: white;

    padding: 0 13px;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;
    align-items: center;

    ion-icon {
        font-size: 70px;
    }
`
import styled from "styled-components";

export default function DailyHabit({ name, isConcluded, streak, record }) {
    return (
        <HabitScreen>
            <InfoRow>
                <HabitTitle>{name}</HabitTitle>
                <TitleData>Sequência atual: <Daily isConcluded={isConcluded}>{streak === 1 ? `${streak} dia` : `${streak} dias`}</Daily></TitleData>
                <TitleData>Seu recorde: <Daily isConcluded={isConcluded}>{record === 1 ? `${record} dia` : `${record} dias`}</Daily></TitleData>
            </InfoRow>

            <ion-icon name="checkbox" isConcluded={isConcluded}></ion-icon>
        </HabitScreen>
    )
}

const Daily = styled.span`
    color: ${props => props.isConcluded ? "#8FC549" : "#666666"}
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
        color: ${props => props.isConcluded ? "#8FC549" : "#EBEBEB"};
        font-size: 70px;
    }
`
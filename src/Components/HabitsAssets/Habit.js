import axios from "axios";
import styled from "styled-components";

export default function Habit({ name, id, days, config, getHabitsList }) {
    function deleteHabit() {
        axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config)
            .then(answer => {
                getHabitsList();
            })
            .catch(error => alert("Tivemos um problema ao deletar o seu hábito. Tente novamente mais tarde."))
    }

    return (
        <HabitDisplay>
            <Line>
                <HabitTitle>{name}</HabitTitle>
                <ion-icon style={{ fontSize: '15px' }} name="trash-outline" onClick={deleteHabit}></ion-icon>
            </Line>

            <DaysRow>
                <Day isSelected={days.some((number) => number === 0)}>D</Day>
                <Day isSelected={days.some((number) => number === 1)}>S</Day>
                <Day isSelected={days.some((number) => number === 2)}>T</Day>
                <Day isSelected={days.some((number) => number === 3)}>Q</Day>
                <Day isSelected={days.some((number) => number === 4)}>Q</Day>
                <Day isSelected={days.some((number) => number === 5)}>S</Day>
                <Day isSelected={days.some((number) => number === 6)}>S</Day>
            </DaysRow>
        </HabitDisplay>
    )
}

const Line = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
`

const DaysRow = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 90%;
    margin-top: 8px;
`

const HabitTitle = styled.p`
    font-size: 20px;
    color: #666666;
`

const HabitDisplay = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90px;
    margin-bottom: 10px;

    border-radius: 5px;
    background-color: white;
    
    align-items: center;
    justify-content: center;
`

const Day = styled.div`
    width: 30px;
    height: 30px;
    font-size: 20px;

    box-sizing: border-box;
    border-radius: 5px;
    margin-right: 5px;

    display: flex;
    align-items: center;
    justify-content: center;

    color: ${props => props.isSelected ? "white" : "#DBDBDB"};
    background-color: ${props => props.isSelected ? '#CFCFCF' : 'white'};
    border: ${props => props.isSelected ? "1px solid #D5D5D5" : "1px solid #D5D5D5"};
`

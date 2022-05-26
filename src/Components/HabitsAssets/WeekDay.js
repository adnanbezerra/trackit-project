import styled from "styled-components";
import { useState } from "react";

export default function WeekDay({ day, id, weekDaysList, setWeekDaysList }) {
    const [isSelected, setIsSelected] = useState(false);

    function addWeekDay() {
        if (weekDaysList.some( (number) => number === id)) {
            setIsSelected(false);
            setWeekDaysList(weekDaysList.filter( (number) => number !== id));
        } else {
            setIsSelected(true);
            setWeekDaysList([...weekDaysList, id]);
        }
    }

    return (
        <Day onClick={addWeekDay} isSelected={isSelected}>{day}</Day>
    )
}

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

    &:hover{
        cursor: pointer;
    }
`
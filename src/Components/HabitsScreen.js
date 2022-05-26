import { useContext, useEffect, useState } from "react"
import UserContext from "./contexts/UserContext"
import WeekDay from "./HabitsAssets/WeekDay";
import Habit from "./HabitsAssets/Habit";

import styled from "styled-components"
import axios from "axios";

export default function HabitsScreen() {

    const { loggedUser } = useContext(UserContext);
    const [habitsList, setHabitsList] = useState([]);
    const [addTask, setAddTask] = useState(false);
    const [habitName, setHabitName] = useState("")
    const [weekDaysList, setWeekDaysList] = useState([])

    const config = {
        headers: {
            Authorization: "Bearer " + loggedUser.token
        }
    }
    useEffect(() => getHabitsList(), [])

    function getHabitsList() {
        axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config)
            .then(answer => setHabitsList(answer.data))
            .catch(error => alert("Estamos com problema no servidor. Tente novamente mais tarde."))
    }

    function submitForm(event) {
        event.preventDefault();
        const habit = {
            name: habitName,
            days: weekDaysList
        };

        axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', habit, config)
            .then((answer) => {
                getHabitsList();
                setHabitName("");
                setWeekDaysList([]);
            })
            .catch((error) => console.log(error))
    }

    function invertAddTask() {
        setAddTask(!addTask)
    }

    function getAddTask() {
        return (
            <Form onSubmit={submitForm}>
                <FormInput placeholder="nome do hábito" type='text' value={habitName} onChange={e => setHabitName(e.target.value)} />
                <WeekDaysRow>
                    <WeekDay day='D' id='1' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                    <WeekDay day='S' id='2' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                    <WeekDay day='T' id='3' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                    <WeekDay day='Q' id='4' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                    <WeekDay day='Q' id='5' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                    <WeekDay day='S' id='6' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                    <WeekDay day='S' id='7' weekDaysList={weekDaysList} setWeekDaysList={setWeekDaysList} />
                </WeekDaysRow>

                <ButtonsRow>
                    <Cancel onClick={invertAddTask} >Cancelar</Cancel>
                    <SaveButton>Salvar</SaveButton>
                </ButtonsRow>
            </Form>
        )
    }

    return (
        <Screen>
            <Top>
                <ScreenTitle>Meus hábitos</ScreenTitle>
                <Button onClick={invertAddTask}>+</Button>
            </Top>

            {addTask ? getAddTask() : <></>}

            {habitsList[0] ?
                <>
                    {habitsList.map((habit) => {return(<Habit name={habit.name} id={habit.id} days={habit.days} config={config} getHabitsList={getHabitsList} />)})}
                </>
                : <NoHay>Você não tem nenhum hábito cadastrado ainda. Adicione um novo hábito para começar a trackear!</NoHay>}
        </Screen>
    )
}

const WeekDaysRow = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 90%;
    margin-top: 8px;
`

const FormInput = styled.input`
    width: 90%;
    height: 45px;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    box-sizing: border-box;

    color: #666666;
    display: flex;
    align-items: center;

    margin-top: 6px;
    padding-left: 10px;

    ::placeholder {
        color: #DBDBDB;
        font-size: 20px;
    }

    &:disabled{
        background-color: #F2F2F2;
        color: #AFAFAF;
        border: 1px solid #D5D5D5;;
    }

`

const Cancel = styled.button`
    color: #52B6FF;
    font-size: 16px;
    border: 0;
    background-color: white;
    margin-right: 23px;
`

const ButtonsRow = styled.div`
    display: flex;
    margin-top: 30px;
    width: 90%;

    justify-content: flex-end;
`

const SaveButton = styled.button`
    background-color: #52B6FF;
    width: 84px;
    height: 35px;

    border-radius: 5px;
    border: 0;

    color: white;
    font-size: 16px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 180px;
    margin-bottom: 30px;

    border-radius: 5px;
    background-color: white;
    
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    width: 40px;
    height: 35px;
    background-color: #52B6FF;

    border-radius: 5px;
    border: 0;

    font-size: 27px;
    color: white;
    margin-bottom: 30px;

    &:hover{
        cursor: pointer;
    }
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NoHay = styled.p`
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
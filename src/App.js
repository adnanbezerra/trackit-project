import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import axios from "axios";

import GlobalStyle from "./Components/styles/GlobalStyle";
import InitialScreen from "./Components/InitialScreen";
import TopBar from "./Components/templates/TopBar"
import BottomMenu from "./Components/templates/BottomMenu"
import TodayScreen from "./Components/TodayScreen";
import HabitsScreen from "./Components/HabitsScreen";
import HistoryScreen from "./Components/HistoryScreen";

import UserContext from "./Components/contexts/UserContext";
import RegisterScreen from "./Components/RegisterScreen";
import { config } from "./Components/mock/info";

export default function App() {
  const [loggedUser, setLoggedUser] = useState();
  const [concludedHabits, setConcludedHabits] = useState(0)
  const [todayHabits, setTodayHabits] = useState([])

  let counter = 0;

  function getTodayHabits() {
    axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config(loggedUser.token))
      .then(answer => {
        counter = 0;

        setTodayHabits([...answer.data])

        for (let i = 0; i < todayHabits.length; i++) if (todayHabits[i].done === true) counter++;

        setConcludedHabits(counter);
      })
      .catch(error => console.log("deu bãon't"));
  }


  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser, concludedHabits, setConcludedHabits, todayHabits, setTodayHabits, getTodayHabits }}>

      <GlobalStyle />

      <BrowserRouter>

        {loggedUser ? <TopBar /> : <></>}

        <Routes>
          <Route path={'/'} element={<InitialScreen />} />
          <Route path={'/register'} element={<RegisterScreen />} />
          <Route path={'/historico'} element={<HistoryScreen />} />
          <Route path={'/habito'} element={<HabitsScreen />} />
          <Route path={'/hoje'} element={<TodayScreen />} />
        </Routes>

        {loggedUser ? <BottomMenu /> : <></>}

      </BrowserRouter>

    </UserContext.Provider>
  );
}

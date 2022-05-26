import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import GlobalStyle from "./Components/styles/GlobalStyle";
import InitialScreen from "./Components/InitialScreen";
import TopBar from "./Components/shared/TopBar"
import BottomMenu from "./Components/shared/BottomMenu"
import TodayScreen from "./Components/TodayScreen";
import HabitsScreen from "./Components/HabitsScreen";
import HistoryScreen from "./Components/HistoryScreen";

import UserContext from "./Components/contexts/UserContext";
import RegisterScreen from "./Components/RegisterScreen";

export default function App() {

  const [loggedUser, setLoggedUser] = useState();
  const [concludedHabits, setConcludedHabits] = useState(0)

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser, concludedHabits, setConcludedHabits }}>

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
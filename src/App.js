import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import InitialScreen from "./Components/InitialScreen";
import TopBar from "./Components/shared/TopBar"
import BottomMenu from "./Components/shared/BottomMenu"
import TodayScreen from "./Components/TodayScreen";
import HabitsScreen from "./Components/HabitsScreen";
import HistoryScreen from "./Components/HistoryScreen";

import UserContext from "./Components/contexts/UserContext";
import RegisterScreen from "./Components/RegisterScreen";

export default function App() {

  const [loginToken, setLoginToken] = useState("");

  return (
    <UserContext.Provider value={{ loginToken, setLoginToken }}>
      <BrowserRouter>

        {loginToken ? <TopBar /> : <></>}

        <Routes>
          <Route path={'/'} element={<InitialScreen />} />
          <Route path={'/register'} element={<RegisterScreen />} />
          <Route path={'/historico'} element={<HistoryScreen />} />
          <Route path={'/habito'} element={<HabitsScreen />} />
          <Route path={'/hoje'} element={<TodayScreen />} />
        </Routes>

        {loginToken ? <BottomMenu /> : <></>}

      </BrowserRouter>
    </UserContext.Provider>
  );
}
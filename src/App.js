import "./Components/css/reset.css"
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import InitialScreen from "./Components/InitialScreen";
import TopBar from "./Components/shared/TopBar"
import BottomMenu from "./Components/shared/BottomMenu"
import TodayScreen from "./Components/TodayScreen";
import HabitsScreen from "./Components/HabitsScreen";
import HistoryScreen from "./Components/HistoryScreen";

export default function App() {
  return (
    <BrowserRouter>

      <TopBar />

      <Routes>
        <Route path={'/'} element={<InitialScreen />} />
        <Route path={'/historico'} element={<HistoryScreen />} />
        <Route path={'/habito'} element={<HabitsScreen />} />
        <Route path={'/hoje'} element={<TodayScreen />} />
      </Routes>

      <BottomMenu />

    </BrowserRouter>
  );
}
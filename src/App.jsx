import React from 'react';
import PlannerFormTheFeed from './PlannerFormTheFeed/main.js';
import { Routes, Route } from "react-router-dom";
import { ResultsPage } from './ResultsPage.jsx'

import './PlannerFormTheFeed/style.css'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/"  element={<PlannerFormTheFeed />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </div>
  )
}
import React from 'react';
import PlannerFormTheFeed from './PlannerFormTheFeed/main.js';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Layout } from './Layout.jsx'
import { ResultsPage } from './ResultsPage.jsx'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PlannerFormTheFeed />} />
          <Route path="results" element={<ResultsPage />} />
        </Route>
      </Routes>
    </div>
  )
}
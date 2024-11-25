import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import Heading from './Heading';
import reportWebVitals from './reportWebVitals';
import Gallery from './sculpture';
import Game from './TicTacToe';
import './index.css';
import PenseReact from './PenseReact';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="PenseReact" element={<PenseReact />} />
        <Route path="Heading" element={<Heading />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="Game" element={<Game />} />
      </Routes>
    </React.StrictMode>
  </Router>
);

/**
  ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route index element={<RecentActivity />} />
        <Route path="project/:id" element={<Project />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
 */
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import { render } from "react-dom";
import './index.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import HouseOntheHill from './containers/HouseOntheHill';
import Home from './containers/Home';
import App from './App';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/BoardGame" element={<Home />} />
      <Route path="/BoardGame/HouseOntheHill" element={<HouseOntheHill />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);

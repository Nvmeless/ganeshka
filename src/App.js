import React from "react";
import "./App.css";
import Home from "./components/pages/Home-old";
import { Router } from "./components/pages/Router";
import refreshTokenInterceptor from "./config/refreshTokenInterceptor";
import { store } from "./app/store";

function App() {
  refreshTokenInterceptor(store);
  return <Router></Router>;
}

export default App;

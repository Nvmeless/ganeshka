import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import { Router } from "./components/pages/Router";
import refreshTokenInterceptor from "./config/refreshTokenInterceptor";
import { store } from "./app/store";

function App() {
  refreshTokenInterceptor(store);
  return <Home></Home>;
}

export default App;

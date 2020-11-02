import React from "react";
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Switch, Route } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Footer from "./components/Footer/Footer";
import Appbar from "./components/Appbar/Appbar";

function App() {
  return (
    <div className="main-app">
      <CssBaseline />
      <Appbar />
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
        <Footer />
    </div>
  );
}

export default App;
